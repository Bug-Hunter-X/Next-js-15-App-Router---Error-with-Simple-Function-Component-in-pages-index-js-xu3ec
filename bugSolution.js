```javascript
// app/page.js
export default function Home() {
  return (
    <div>Hello world!</div>
  );
}
```
The solution involves using the new App Router structure.  Instead of placing the component in `pages/index.js`,  it should be moved to `app/page.js`.  This leverages the App Router's intended directory structure and resolves the unexpected error.