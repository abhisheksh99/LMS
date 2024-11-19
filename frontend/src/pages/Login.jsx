import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

const Login = () => {
  const [loginInput, setLoginInput] = useState({
    email: "",
    password: "",
  });

  const [signUpInput, setSignUpInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e, type) => {
    const { name, value } = e.target;
    if (type === "signup") {
      setSignUpInput({ ...signUpInput, [name]: value });
    } else {
      setLoginInput({ ...loginInput, [name]: value });
    }
  };

  const handleRegistration = (type) =>{
    const inputData = type === "signup" ? signUpInput : loginInput
    console.log(inputData);
    
    
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <Tabs defaultValue="login" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="signup">SignUp</TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <Card>
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>
                Enter your credentials to access your account.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  value={loginInput.email}
                  placeholder="Enter your email"
                  onChange={(e) => handleChange(e, "login")}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  value={loginInput.password}
                  type="password"
                  placeholder="Enter your password"
                  onChange={(e) => handleChange(e, "login")}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" onClick={() => handleRegistration("login")}>Login</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="signup">
          <Card>
            <CardHeader>
              <CardTitle>Sign Up</CardTitle>
              <CardDescription>
                Create a new account to get started.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={signUpInput.name}
                  placeholder="Enter your name"
                  onChange={(e) => handleChange(e, "signup")}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  value={signUpInput.email}
                  placeholder="Enter your email"
                  onChange={(e) => handleChange(e, "signup")}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="new-password">Password</Label>
                <Input
                  id="new-password"
                  name="password"
                  value={signUpInput.password}
                  type="password"
                  placeholder="Create a password"
                  onChange={(e) => handleChange(e, "signup")}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" onClick={() => handleRegistration("signup")}>Sign Up</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Login;