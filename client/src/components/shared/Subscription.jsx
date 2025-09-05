import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";

const Subscription = () => {
  const [email, setEmail] = useState("");
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!email) {
      return toast.error("Email is required");
    }
    toast.success("Subscribed successfully");
    setEmail("");
  };
  return (
    <div className="container__width">
      <div className="flex flex-col items-center justify-center gap-4 my-12 sm:my-20">
        <p className="text-xl font-semibold">Subscribe now & get 20% off</p>
        <p className="text-sm text-gray-400 w-[90%] sm:w-[40%] text-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda
          molestias eveniet inventore
        </p>
        <form
          onSubmit={onSubmitHandler}
          className="flex items-center w-[90%] sm:w-[40%] mt-4"
        >
          <Input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            className="rounded-none"
            placeholder="Email"
          />
          <Button type="submit" className="rounded-none">
            Subscribe
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Subscription;
