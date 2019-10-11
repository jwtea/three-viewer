Access material mesh

```jsx
meshref = useRef();

useRender(()=>{
  //Access material by ref
  meshref.current.material
})

<material ref={meshref} />
```
