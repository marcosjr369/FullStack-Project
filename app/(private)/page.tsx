import { prisma } from "@/lib/prisma";

export default async function Home() {
  const users = await prisma.user.findMany();
  console.log(users)
  
  return (
    <div className="flex items-center justify-center gap-2 bg-zinc-50 dark:bg-black">
      {users.map(user => (
        <div key={user.id} className="text-white">
          <p>{user.firstName} {user.lastName}</p>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}