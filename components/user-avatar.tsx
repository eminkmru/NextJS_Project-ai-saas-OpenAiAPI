import { useUser } from "@clerk/nextjs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const UserAvatar = () => {
  const { user } = useUser();
  console.log(user);
  return (
    <Avatar className="h-8 w-8">
      <AvatarImage src={user?.imageUrl} />
      <AvatarFallback>
        {user?.firstName[0]?.charAt(0)}
        {user?.lastName[0]?.charAt(0)}
      </AvatarFallback>
    </Avatar>
  );
};
