import { Button } from "./ui/button";

export default function MainNav() {
  return (
    <span className="flex space-x-2 items-center">
      <Button
        variant="ghost"
        className="font-bold hover:text-orange-500 hover:bg-white"
      >
        Log In
      </Button>
    </span>
  )
}
