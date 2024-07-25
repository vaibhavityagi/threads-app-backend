import { prisma } from "../lib/db";

interface newUserInterface {
  username: string;
  email: string;
  firstName: string;
  lastName?: string;
  password: string;
  phone: string;
  profileImageUrl?: string;
}

class UserService {
  public static async newUser({
    username,
    email,
    firstName,
    lastName,
    password,
    phone,
    profileImageUrl,
  }: newUserInterface) {
    const res = await prisma.user.create({
      data: {
        username,
        email,
        firstName,
        lastName: lastName || null,
        password,
        phone,
        profileImageUrl: profileImageUrl || null,
      },
    });
    return String(res.id);
  }
}

export default UserService;
