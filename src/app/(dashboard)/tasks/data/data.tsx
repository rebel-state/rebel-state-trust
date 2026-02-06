import {
  CheckCircle2,
  Circle,
  Clock,
  PlayCircle,
  Bell,
  BellRing,
  CircleAlert,
  ShieldAlert,
} from "lucide-react"

export const categories = [
  {
    value: "bug",
    label: "Bug",
  },
  {
    value: "feature",
    label: "Feature",
  },
  {
    value: "documentation",
    label: "Docs",
  },
  {
    value: "improvement",
    label: "Improvement",
  },
  {
    value: "refactor",
    label: "Refactor",
  },
]

export const statuses = [
  {
    value: "pending",
    label: "Pending",
    icon: Clock,
  },
  {
    value: "todo",
    label: "Todo",
    icon: Circle,
  },
  {
    value: "in progress",
    label: "In Progress",
    icon: PlayCircle,
  },
  {
    value: "completed",
    label: "Completed",
    icon: CheckCircle2,
  },
]

export const priorities = [
  {
    label: "Minor",
    value: "minor",
    icon: Bell,
  },
  {
    label: "Normal",
    value: "normal",
    icon: BellRing,
  },
  {
    label: "Important",
    value: "important",
    icon: CircleAlert,
  },
  {
    label: "Critical",
    value: "critical",
    icon: ShieldAlert,
  },
]
