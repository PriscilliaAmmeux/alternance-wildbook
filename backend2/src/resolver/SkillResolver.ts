import { Arg, Mutation, Query, Resolver } from "type-graphql";
import dataSource from "../utils";
import { Skill } from "../entity/Skill";

@Resolver()
class SkillResolver {
  @Query(() => [Skill])
  async getAllSkills(): Promise<Skill[]> {
    const result = await dataSource.getRepository(Skill).find();
    return result;
  }

  @Mutation(() => Skill)
  async addSkill(@Arg("name") name: string): Promise<Skill> {
    const createSkill = await dataSource.getRepository(Skill).save({ name });
    return createSkill;
  }

  @Mutation(() => String)
  async deleteSkill(@Arg("name") name: string): Promise<String> {
    const deleteSkill = await dataSource.getRepository(Skill).save({ name });
    console.log(deleteSkill);
    return "Skill deleted";
  }
}

export default SkillResolver;
