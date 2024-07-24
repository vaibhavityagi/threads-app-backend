import { prisma } from "../../lib/db";
import UserService from "../../services/user";

interface newUserInterface {
  username: string;
  email: string;
  firstName: string;
  lastName?: string;
  password: string;
  phone: string;
  profileImageUrl?: string;
}

const queries = {
  users: async () => {
    const res = await prisma.user.findMany();
    console.log(res);
    return res[0];
  },
};
const mutations = {
  newUser: async (_: any, parameters: newUserInterface) => {
    console.log(parameters);
    await UserService.newUser({ ...parameters });
  },
};

const resolvers = { queries, mutations };

export default resolvers;
