export type JobStatus =
  | "new"
  | "scored"
  | "content_ready"
  | "applied"
  | "interview"
  | "offer"
  | "rejected"
  | "skipped"
  | "bookmarked"
  | "ghosted"

export type SeniorityLevel =
  | "intern"
  | "entry"
  | "mid"
  | "senior"
  | "staff"
  | "principal"
  | "director"
  | "vp"
  | "c_level"

export type EmploymentType =
  | "full_time"
  | "part_time"
  | "contract"
  | "temporary"

export type LocationType =
  | "remote"
  | "remote_tz"
  | "hybrid_flex"
  | "hybrid_fixed"
  | "onsite"

export type JobSource =
  | "linkedin"
  | "indeed"
  | "glassdoor"
  | "company_site"
  | "wellfound"
  | "ycombinator"

export type DecisionType = "auto" | "review" | "skip"

export interface Job {
  id: string
  title: string
  company: {
    name: string
    logo?: string
    isDreamCompany?: boolean
  }
  score: number
  confidence: number
  status: JobStatus
  location: string
  locationType: LocationType
  seniority: SeniorityLevel
  employmentType: EmploymentType
  salary?: {
    min: number
    max: number
    currency: string
    estimated?: boolean
  }
  postedAt: Date
  source: JobSource
  skills: {
    matched: string[]
    missing: string[]
  }
  decision: DecisionType
  hasContent: boolean
  isPotentialScam?: boolean
  isBlacklisted?: boolean
}

export interface JobFilters {
  scoreRange: [number, number]
  confidenceRange: [number, number]
  status: JobStatus[]
  seniority: SeniorityLevel[]
  employmentType: EmploymentType[]
  locationType: LocationType[]
  locations: string[]
  companies: string[]
  salaryRange: [number, number]
  salaryCurrency: string
  sources: JobSource[]
  dateRange: { from?: Date; to?: Date }
  dreamCompanyOnly: boolean
  hasContentOnly: boolean
  showBlacklisted: boolean
  showPotentialScam: boolean
}

export type ViewMode = "table" | "cards" | "compact"

export type SortOption =
  | "score_desc"
  | "date_desc"
  | "company_asc"
  | "salary_desc"
  | "status"
