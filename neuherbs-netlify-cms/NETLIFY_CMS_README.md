# Netlify CMS — Setup Guide pour neuherbs.com

## Ce que contient ce dossier

```
admin/
  index.html    ← Interface du CMS (page /admin)
  config.yml    ← Configuration des collections éditables
netlify.toml    ← Configuration Netlify (headers, redirections)
```

---

## Installation : 3 étapes

### 1. Copier dans ton repo

Place ces fichiers à la **racine de ton repo Git** :
- `admin/index.html`
- `admin/config.yml`
- `netlify.toml`

### 2. Activer Netlify Identity

Dans le dashboard Netlify → **Site settings → Identity → Enable Identity**

Puis dans **Identity → Services → Enable Git Gateway**

### 3. Inviter les utilisateurs

Dans **Identity → Invite users** → entre ton email

Tu recevras un lien d'activation. Après confirmation, tu pourras te connecter sur `https://neuherbs.com/admin`.

---

## Accès au CMS

👉 **https://neuherbs.com/admin**

Login avec ton compte Netlify Identity.

---

## Ce que tu peux éditer

| Section | Contenu |
|---------|---------|
| **Produits** | Nom, prix, catégorie, images, description, SEO |
| **Pages** | About Us, Contact, Shipping Policy, etc. |
| **Collections** | Catégories produits, bannières |
| **Paramètres** | Nom du site, analytics (GA4, Facebook Pixel), réseaux sociaux |
| **Navigation** | Menu principal et footer |
| **Bannière** | Messages d'annonce en rotation |

---

## IDs Analytics déjà pré-remplis

- Google Analytics : `G-YWCL9WCBTM`
- Google Ads : `AW-784054203`
- Facebook Pixel : `492217447793940`

---

## Ajout d'images

Les images uploadées via le CMS sont sauvegardées dans `/assets/uploads/` et committées dans le repo.

---

## Notes importantes

- Chaque modification dans le CMS crée un **commit Git automatique** sur la branche `main`
- Netlify redéploie le site automatiquement après chaque commit
- Tu peux changer la branche dans `admin/config.yml` → `backend.branch`
