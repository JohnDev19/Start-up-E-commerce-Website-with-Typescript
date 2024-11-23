# 🛍️ Start-up E-commerce with TypeScript

## 🚀 Features

- 🎯 Full TypeScript support
- ⚡ Next.js 13 App Router
- 🎨 Tailwind CSS for styling 
- 🛒 Shopping cart functionality
- 💳 Checkout process
- 🔄 Real-time cart updates
- 🔒 API routes for backend functionality

## 🛠️ Tech Stack

- **Framework:** Next.js 13 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **State Management:** React Hooks
- **API:** Next.js API Routes

## 🏃‍♂️ Getting Started

Install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Set up your environment variables:

Create a `.env.local` file in the root directory and add:

```
NEXT_PUBLIC_API_URL=http://localhost:3000
```

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser and voilà.

## 📁 Project Structure

```
├── app/
│   ├── api/           # API routes for products, cart, etc.
│   ├── cart/         # Shopping cart page
│   ├── checkout/     # Checkout process
│   ├── product/      # Product details pages
│   ├── components/   # React components
│   ├── layout.tsx    # Root layout
│   └── page.tsx      # Home page
├── lib/
│   └── api.ts        # API utility functions
└── public/           # Static files
```

## 🎯 Future Improvements

No project is ever really "done" 😉

- [ ] Add user authentication
- [ ] Integrate with a real database
- [ ] Add payment processing
- [ ] Create an admin dashboard
- [ ] Add product categories and search
- [ ] Write some tests (I promise I'll do it... eventually)

## 🤝 Contributing

Want to add a feature? PRs are welcome! Just keep it TypeScript-y and make sure it doesn't break anything.

## 📝 License

MIT [LICENCE](LICENCE)- because sharing is caring! ❤️

---

Built with ❤️ and lots of ☕ by JohnDev19.

P.S. If you like this project, maybe consider giving it a ⭐️? No pressure though!
