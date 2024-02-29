import {
  TbBrandNextjs,
  TbBrandReact,
  TbBrandSupabase,
  TbBrandRedux,
  TbBrandFirebase,
  TbBrandJavascript,
  TbBrandCss3
} from "react-icons/tb";

interface Skill {
  id: number;
  tech: string;
  icon: React.ComponentType;
}

export const fron_skills: Skill[] = [
  { id: 0, tech: "React", icon: TbBrandReact },
  { id: 1, tech: "Nextjs", icon: TbBrandNextjs },
  { id: 3, tech: "Redux", icon: TbBrandRedux },
  { id: 4, tech: "Javascript", icon: TbBrandJavascript },
  { id: 4, tech: "Css", icon: TbBrandCss3 }
];

export const back_skills: Skill[] = [
  { id: 0, tech: "Supabase", icon: TbBrandSupabase },
  { id: 1, tech: "Firebase", icon: TbBrandFirebase }
];
