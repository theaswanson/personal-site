import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export class NavigationItem {
  title: string;
  get fragment(): string {
    return this.title.toLowerCase();
  }

  constructor(title: string) {
    this.title = title;
  }
}

export type ExternalNavigationItem = {
  title?: string;
  url?: string;
};

export type SocialItem = {
  icon?: IconDefinition;
  href?: string;
};

export type Milestone = {
  title?: string;
  subtitle?: string;
  date?: string;
  image?: string;
};

export type VolunteerPosition = Milestone & {
  url: string;
  urlTitle: string;
};

export type SkillGroup = {
  category?: string;
  skills?: Skill[];
};

export type Skill = {
  name?: string;
  imageName?: string;
};
