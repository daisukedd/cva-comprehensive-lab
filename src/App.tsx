import { Button } from "./components/Button"

export default function App() {
  return (
    <div style={{ padding: 32, display: "flex", gap: 12 }}>
      <Button color="blue" size="lg">Save</Button>
      <Button color="red"  size="sm">Delete</Button>
      <Button color="gray" size="md">Cancel</Button>
    </div>
  )
}