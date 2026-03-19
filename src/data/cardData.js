{ /* import { GitBranch, UserCog, Users, CreditCard, Key, MessageCircle } from "lucide-react"}*/}
import ManageBilling from '../assets/icons/ManageBilling.jsx'
import GitBranch from '../assets/icons/GitBranch.jsx'
import AuthKey from '../assets/icons/AuthKey.jsx'
import MessageCircle from '../assets/icons/MessageCircle.jsx'
import ManageOrg from '../assets/icons/ManageOrg.jsx'
import Users from '../assets/icons/Users.jsx'

export const cardData = [
    {
        id: 1,
        icon: GitBranch,
        heading: "Branches",
        description: "Abstract Branches lets you manage, version, and document your designs in one place.",
        link: "/branches-more"
    },
    {
        id: 2,
        icon: ManageOrg,
        heading: "Manage your account",
        description: "Configure your account settings, such as your email, profile details, and password.",
        link: "/account-more"
    },
    {
        id: 3,
        icon: Users,
        heading: "Manage organizations, teams, and projects",
        description: "Use Abstract organizations, teams, and projects to organize your people and your work.",
        link: "/orgs-more"
      },
      {
        id: 4,
        icon: ManageBilling,
        heading: "Manage billing",
        description: "Change subscriptions and payment details.",
        link: "/billing-more"
      },
      {
        id: 5,
        icon: AuthKey,
        heading: "Authenticate to Abstract",
        description: "Set up and configure SSO, SCIM, and Just-in-Time provisioning.",
        link: "/auth-more"
      },
      {
        id: 6,
        icon: MessageCircle,
        heading: "Abstract support",
        description: "Get in touch with a human.",
        link: "/support-more"
      },
]