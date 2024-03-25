import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Component() {
  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="w-full max-w-sm space-y-4">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Sign in to your account</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Dont have an account? &nbsp;
            <Link className="underline" href="#">
              Sign up
            </Link>
          </p>
        </div>
        <div className="space-y-2">
          <Label htmlFor="username">Username</Label>
          <Input id="username" placeholder="username" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" required type="password" />
        </div>
        <Button className="w-full bg-blue-600">Sign In</Button>
        <div className="space-y-2 text-center">
          <Link className="underline" href="#">
            Forgot your password?
          </Link>
        </div>
      </div>
    </div>
  );
}
