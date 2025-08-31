src/
 ├── assets/                 # şəkillər, ikonlar, fontlar, static fayllar
 │
 ├── components/             # ümumi istifadə olunan komponentlər
 │    ├── ui/                # Button, Input, Modal kimi atomik UI komponentləri
 │    ├── layout/            # Layout, Navbar, Footer
 │    └── common/            # ümumi widgetlər (Loader, ProtectedRoute və s.)
 │
 ├── features/               # hər bir domen üçün ayrıca folder
 │    ├── auth/              
 │    │    ├── components/   # LoginForm, RegisterForm
 │    │    ├── hooks/        # auth ilə bağlı xüsusi hook-lar
 │    │    ├── services/     # auth API çağırışları (login, register və s.)
 │    │    ├── types/        # yalnız auth-a aid TS type-lar
 │    │    └── authSlice.ts  
 │    │
 │    ├── categories/
 │    │    ├── components/   # Categories, CategoriesGrid, CategoryModal
 │    │    ├── hooks/
 │    │    ├── services/     # kategoriya ilə bağlı API çağırışları
 │    │    └── types/
 │
 │    └── ... (gələcəkdə məsələn: products, orders və s.)
 │
 ├── hooks/                  # ümumi custom hook-lar (reusable)
 │    ├── useOnClickOutside.ts
 │    └── useWindowWidth.ts
 │
 ├── pages/                  # Route-lara bağlı page-lər
 │    ├── HomePage.tsx
 │    ├── AboutPage.tsx
 │    ├── LoginPage.tsx
 │    ├── RegisterPage.tsx
 │    └── NotFoundPage.tsx
 │
 ├── services/               # ümumi API servis-lər (axios setup, base instance)
 │
 ├── store/                  # Redux store, rootReducer
 │
 ├── utils/                  # helper function-lar (formatDate, validators və s.)
 │
 ├── types/                  # global type-lar (User, ApiResponse və s.)
 │
 ├── styles/                 # global CSS, Tailwind config, theme
 │
 ├── router/                 # router.tsx bura köçsün
 │
 ├── App.tsx
 └── main.tsx
