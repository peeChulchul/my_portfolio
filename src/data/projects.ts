import yolocean from "assets/yolocean.png";
import fanPage from "assets/fanpage.png";
import blog from "assets/blog.png";
import movie from "assets/movie.png";

export interface Iproject {
  id: number;
  project_name: string;
  project_desc: string;
  tech_stack: string[];
  project_img: string;
  project_url: string;
  github_url: string;
}

export const projectDetails: Iproject[] = [
  {
    id: 0,
    project_name: "YOLOCEAN",
    project_desc:
      "사용자가 원하는 날짜에 렌탈 물품과 수령 지점을 선택한 후 간편하게 예약하고 결제할 수 있는 웹 애플리케이션을 목표로 제작하였습니다.",
    tech_stack: ["Nextjs", "Tailwind", "Supabase", "Zustand"],
    project_img: yolocean,
    github_url: "https://github.com/peeChulchul/yolocean",
    project_url: "https://yolocean.store/"
  },
  {
    id: 1,
    project_name: "RHCP FanPage",
    project_desc:
      "RHCP의 각 맴버에게 댓글을 남길 수 있는 팬페이지 입니다. 미들웨어와 accesToken사용경험을 목표로 제작하였습니다.",
    tech_stack: ["React", "Styled-components", "Json-server", "Redux", "Glitch"],
    project_img: fanPage,
    project_url: "https://s-auth-green.vercel.app/",
    github_url: "https://github.com/peeChulchul/S_AUTH"
  },
  {
    id: 2,
    project_name: "Peechulchul Blog",
    project_desc: "Nextjs를 사용하여 만든 개인블로그페이지입니다. NextJs의 기능숙달을 목표로 제작하였습니다.",
    tech_stack: ["Nextjs", "Tailwind", "nodemailer", "react-markdown"],
    project_img: blog,
    project_url: "https://github.com/peeChulchul/next_blog",
    github_url: "https://next-blog-liart-phi.vercel.app/"
  },
  {
    id: 3,
    project_name: "TMDB Movie",
    project_desc: "TMDB API를 활용한 영화검색 사이트 입니다. Vanilla Javascript를 활용하여 제작하였습니다.",
    tech_stack: ["Html", "Css", "Javascript"],
    project_img: movie,
    project_url: "https://s-movie-psi.vercel.app/",
    github_url: "https://github.com/peeChulchul/s_movie"
  }
];
