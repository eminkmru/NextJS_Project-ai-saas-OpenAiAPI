import { Avatar, AvatarImage } from "@/components/ui/avatar";

export const BotAvatar = () => {
  return (
    <Avatar className="h-8 w-12">
      <AvatarImage className="p-1" src="/logo.png" />
    </Avatar>
  );
};
