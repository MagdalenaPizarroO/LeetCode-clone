This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

---

<!--
Iconos: npm install react-icons https://react-icons.github.io/react-icons
Global states for the navbar: npm install recoil    https://recoiljs.org/docs/introduction/getting-started
Firebase: backend service that allows us to create fullstack applications quickly and easy :)
    https://firebase.google.com/ => Go to console => Create project
    npm install firebase
React Firebase Hooks: npm i react-firebase-hooks
    documentation in: https://github.com/csfrequency/react-firebase-hooks README
    authentication Hooks: https://github.com/CSFrequency/react-firebase-hooks/tree/master/auth
        We used:
            useCreateUserWithEmailAndPassword,
            useSignInWithEmailAndPassword,
            useSignOut,
            useSendPasswordResetEmail

react-youtube: npm i react-youtube
Alerts = React-Toastify: npm i react-toastify
    Se debe importar en _app.tsx:
        import { ToastContainer, toast } from 'react-toastify';
        import 'react-toastify/dist/ReactToastify.css';
    return (
     <ToastContainer />
    )

resize problems windows: npm i react-split
    https://split.js.org/

Code Editor: uiw/react-codemirror: npm i @uiw/react-codemirror
    VSCode Theme: @uiw/codemirror-theme-vscode
    JS Language support: @codemirror/lang-javascript

Assert: npm i assert
    used to compare the f(x) the user passed-in with the correct answer.

Add data to Firestore Database: Add a document
https://firebase.google.com/docs/firestore/manage-data/add-data#add_a_document
    we want to generate de document id, so we used the setDoc() method.
    en handleSubmit:
        await setDoc(doc(<ourFirestoreDB>, <collectionName>, <IdAssignedInForm>), data);

To Create Loading Skeletons with TailwindCSS: https://flowbite.com/docs/components/skeleton/

Get Data From FireStore: Get multiple documents from a collection (with modifications)
https://firebase.google.com/docs/firestore/query-data/get-data#get_multiple_documents_from_a_collection
    en useEffect para hacer el fetch:
        const q = query(collection(<ourFirestoreDB>, <collectionName>), orderBy(<howIWantToOrder>, "asc");
            The Data I'm looking for is in docs(anAarrayOfDocumentsInTheCollection).
                Inside each document (array position), data>value>mapValue>fields
                    doc.data() retrieves the Data I need.
Get Data From Firestore: Get a document (for each problem)

Consistency between Collections: Transactions Firestore => update users and problems collections
https://firebase.google.com/docs/firestore/manage-data/transactions

Update Data from Firestore: Update a document
https://firebase.google.com/docs/firestore/manage-data/add-data#update-data

 -->
