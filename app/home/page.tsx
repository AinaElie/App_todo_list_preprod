import { auth } from "@/auth";

export default async function Page() {
  const session = await auth();

  if (!session?.user) return <div>User not found</div>

  return (
    <div className="w-full h-screen flex justify-center items-center">
      TODO: App TodoList
    </div>
  );
}
