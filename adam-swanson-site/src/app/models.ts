import { IconDefinition } from "@fortawesome/free-regular-svg-icons";

export class NavigationItem {
  title: string;
  get fragment(): string {
    return this.title.toLowerCase();
  }

  constructor(title: string) {
    this.title = title;
  }
}

export class ExternalNavigationItem {
  title: string;
  url: string;
}

export class SocialItem {
  icon: IconDefinition;
  href: string;
}

export class Milestone {
  title: string;
  subtitle: string;
  date: string;
  image?: string;
}

export class CategoricalSkills {
  category: string;
  skills: Skill[];
}

export class Skill {
  name: string;
  imageName: string;
}