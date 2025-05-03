---
title: "Création d'API avec Next.js : Guide Complet"
description: "Ce guide vous montre comment créer des API avec Next.js : configuration, App Router, gestion des méthodes HTTP, routage dynamique, middleware réutilisable et couche d'API dédiée."
published: 2025/03/27
slug: "construit-des-api-avec-nextjs"
image: "/articles/construit-des-api-avec-nextjs.png"
readingTime: "10"
---

## 1. Premiers Pas
### 1.1 Créer une Application Next.js

Pour démarrer un nouveau projet Next.js, utilisez la commande :

```bash
npx create-next-app@latest --api
```

Note : Le flag `--api` inclut automatiquement un exemple de `route.ts` dans le dossier `app/`, démontrant comment créer un point d'entrée API.

### 1.2 App Router vs Pages Router

#### Pages Router (Historique)
- Utilisait `pages/api/*` pour les API
- Reposait sur les objets request/response de Node.js
- Approche de type Express

#### App Router (Défaut depuis Next.js 13)
- Utilise des fichiers `route.ts` ou `route.js` dans le répertoire `app/`
- Embrace les API standard Web Request/Response
- Simplifie l'apprentissage et réduit la friction

## 2. Pourquoi (et Quand) Construire des API avec Next.js

### 2.1 API Publique pour Clients Multiples
- Créez une API consommable par :
  - Votre site web Next.js
  - Une application mobile
  - Des services tiers

Exemple : Récupérer `/api/users` à la fois dans un site web React et une app React Native.

### 2.2 Proxy vers un Backend Existant
- Masquer ou consolider des microservices
- Intercepter des requêtes
- Gérer l'authentification
- Transformer des données
- Rediriger vers une API amont

### 2.3 Webhooks et Intégrations
- Gérer des callbacks externes
- Exemples : 
  - Intégrations Stripe
  - Webhooks GitHub
  - Notifications Twilio

### 2.4 Authentification Personnalisée
- Gérer des sessions
- Stocker des cookies
- Lire des headers
- Répondre avec des données d'authentification

⚠️ Note : Pour un simple fetch côté serveur dans votre app Next.js, les Server Components peuvent suffire.

## 3. Créer une API avec Route Handlers

### 3.1 Structure de Fichiers de Base
```
app/
└── api/
    └── users/
        └── route.ts
```

### 3.2 Méthodes HTTP Multiples dans un Fichier

```typescript
// app/api/users/route.ts
export async function GET(request: Request) {
  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
  ];
  
  return new Response(JSON.stringify(users), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}
 
export async function POST(request: Request) {
  const body = await request.json();
  const { name } = body;
 
  const newUser = { id: Date.now(), name };
 
  return new Response(JSON.stringify(newUser), {
    status: 201,
    headers: { 'Content-Type': 'application/json' }
  });
}
```

## 4. Travailler avec les Web APIs

### 4.1 Utilisation Directe de Request & Response
- Méthodes Route Handler reçoivent un objet Request standard
- Doivent retourner un objet Response standard

### 4.2 Paramètres de Requête

```typescript
// app/api/search/route.ts
import { NextRequest } from 'next/server';
 
export function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get('query'); // ex: `/api/search?query=hello`
 
  return new Response(
    JSON.stringify({ result: `Vous avez recherché : ${query}` }),
    {
      headers: { 'Content-Type': 'application/json' },
    },
  );
}
```

### 4.3 Headers et Cookies

```typescript
// app/api/auth/route.ts
import { NextRequest } from 'next/server';
import { cookies, headers } from 'next/headers';
 
export async function GET(request: NextRequest) {
  // Helpers 'next/headers'
  const cookieStore = await cookies();
  const token = cookieStore.get('token');
 
  const headersList = await headers();
  const referer = headersList.get('referer');
 
  // API Web Standard
  const userAgent = request.headers.get('user-agent');
 
  return new Response(JSON.stringify({ token, referer, userAgent }), {
    headers: { 'Content-Type': 'application/json' },
  });
}
```

## 5. Routes Dynamiques

Structure pour `/api/users/:id` :

```
app/
└── api/
    └── users/
        └── [id]/
            └── route.ts
```

```typescript
// app/api/users/[id]/route.ts
import { NextRequest } from 'next/server';
 
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  
  return new Response(JSON.stringify({ id, name: `Utilisateur ${id}` }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
 
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  
  return new Response(null, { status: 204 });
}
```

## 6. Next.js comme Proxy

```typescript
// app/api/external/route.ts
import { NextRequest } from 'next/server';
 
export async function GET(request: NextRequest) {
  const response = await fetch('https://exemple.com/api/donnees', {
    headers: { 
      Authorization: `Bearer ${process.env.TOKEN_API}` 
    }
  });
 
  const data = await response.json();
  const transformed = { ...data, source: 'next-js-proxy' };
 
  return new Response(JSON.stringify(transformed), {
    headers: { 'Content-Type': 'application/json' },
  });
}
```

## 7. Middleware Partagé

```typescript
// lib/with-auth.ts
import { NextRequest } from 'next/server';
 
type Handler = (req: NextRequest, context?: any) => Promise<Response>;
 
export function withAuth(handler: Handler): Handler {
  return async (req, context) => {
    const token = req.cookies.get('token')?.value;
    if (!token) {
      return new Response(JSON.stringify({ error: 'Non autorisé' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }
 
    return handler(req, context);
  };
}

// Utilisation
export const GET = withAuth(async (request: NextRequest) => {
  return new Response(JSON.stringify({ secret: 'Données secrètes' }), {
    headers: { 'Content-Type': 'application/json' },
  });
});
```

## 8. Déploiement et Considérations

### 8.1 Déploiement Standard Node.js
- Pas de configuration supplémentaire requise
- Supporte Route Handlers, Server Components, Middleware

### 8.2 Export Statique (SPA)

```typescript
// next.config.ts
import type { NextConfig } from 'next';
 
const nextConfig: NextConfig = {
  output: 'export',
};
 
export default nextConfig;
```

⚠️ Limitations en mode statique :
- Pas de code serveur
- Requiert un API séparé
- Seuls les GET statiques sont supportés

## 9. Quand Ne Pas Créer d'API

Avec les Server Components, fetch direct possible :

```typescript
// app/utilisateurs/page.tsx
export default async function PageUtilisateurs() {
  const res = await fetch('https://api.exemple.com/utilisateurs');
  const utilisateurs = await res.json();
 
  return (
    <main>
      <h1>Utilisateurs</h1>
      <ul>
        {utilisateurs.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </main>
  );
}
```

## Conclusion

Next.js offre une approche moderne pour construire des API :
- Basée sur les standards Web
- Flexibilité maximale
- Intégration transparente
- Facile à déployer

Bon développement ! 🚀