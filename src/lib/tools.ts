export interface Tool {
  slug: string;
  name: string;
  description: string;
  longDescription: string;
  icon: string;
  category: string;
  popular?: boolean;
}

export const tools: Tool[] = [
  {
    slug: 'gmail-dot-generator',
    name: 'Gmail Dot Generator',
    description: 'Generate all possible dot variations of your Gmail address. Gmail ignores dots, so each variation is a unique alias.',
    longDescription: 'The Gmail Dot Trick lets you create hundreds of unique email variations by inserting dots anywhere in your Gmail username. Gmail ignores all dots in the local part of email addresses, meaning test@gmail.com, t.est@gmail.com, and t.e.s.t@gmail.com all go to the same inbox. Use this tool to generate every possible variation for signing up to services, testing, or organizing your inbox.',
    icon: '●',
    category: 'Gmail Tools',
    popular: true,
  },
  {
    slug: 'gmail-plus-generator',
    name: 'Gmail Plus Generator',
    description: 'Create Gmail plus-addressing aliases with custom tags. Perfect for filtering emails and tracking signups.',
    longDescription: 'Gmail Plus Addressing (also called subaddressing) lets you add a + sign followed by any tag to your Gmail address. For example, yourname+shopping@gmail.com still delivers to yourname@gmail.com. Use this to create unique addresses for different services, set up filters, and track who sells your email.',
    icon: '+',
    category: 'Gmail Tools',
    popular: true,
  },
  {
    slug: 'random-gmail-generator',
    name: 'Random Gmail Generator',
    description: 'Generate random Gmail-style usernames instantly. Great for testing, placeholders, or creative inspiration.',
    longDescription: 'Need a random email address for testing or placeholder purposes? Our Random Gmail Generator creates realistic Gmail-style usernames using combinations of names, words, and numbers. Generate single or bulk random Gmail addresses with various naming patterns.',
    icon: '?',
    category: 'Gmail Tools',
  },
  {
    slug: 'email-cleaner',
    name: 'Email Cleaner',
    description: 'Clean, deduplicate, and normalize email lists instantly. Remove invalid, duplicate, and disposable emails.',
    longDescription: 'Paste any list of email addresses and our Email Cleaner will instantly remove duplicates, fix common formatting issues, normalize casing, and filter out invalid addresses. Perfect for cleaning email marketing lists, CRM data, or any bulk email list.',
    icon: '✓',
    category: 'Email Utilities',
    popular: true,
  },
  {
    slug: 'email-validator',
    name: 'Email Validator',
    description: 'Validate any email address format with detailed checks. Verify syntax, domain structure, and more.',
    longDescription: 'Instantly validate email addresses with our comprehensive Email Validator. We check RFC 5322 syntax compliance, domain format validity, top-level domain legitimacy, and common typo detection. Get detailed validation reports for any email address.',
    icon: '✉',
    category: 'Email Utilities',
    popular: true,
  },
  {
    slug: 'email-extractor',
    name: 'Email Extractor',
    description: 'Extract all email addresses from any text, document, or webpage content instantly.',
    longDescription: 'Paste any text content — website copy, documents, code, logs — and our Email Extractor will find and extract every email address automatically. Supports bulk extraction with deduplication and export options.',
    icon: '⊙',
    category: 'Email Utilities',
  },
  {
    slug: 'username-generator',
    name: 'Username Generator',
    description: 'Generate unique, creative usernames from your name or keywords. Perfect for email and social media.',
    longDescription: 'Create the perfect username for your email address or social media profiles. Our Username Generator combines your name, keywords, and interests to produce creative, memorable, and available-style usernames in multiple styles.',
    icon: '@',
    category: 'Generators',
  },
  {
    slug: 'disposable-email-checker',
    name: 'Disposable Email Checker',
    description: 'Check if an email address uses a disposable or temporary email domain.',
    longDescription: 'Protect your service from fake signups by detecting disposable and temporary email addresses. Our checker identifies thousands of known throwaway email providers instantly, helping you maintain clean user databases.',
    icon: '⊘',
    category: 'Email Utilities',
  },
  {
    slug: 'email-permutation-generator',
    name: 'Email Permutation Generator',
    description: 'Generate all email permutations from a first name, last name, and domain for outreach and prospecting.',
    longDescription: 'Enter a first name, last name, and company domain to generate every possible email format they might use. Ideal for sales prospecting, finding contact emails, or email deliverability testing across formats like firstname.lastname@company.com, f.lastname@company.com, and dozens more.',
    icon: '⇄',
    category: 'Generators',
    popular: true,
  },
  {
    slug: 'email-name-generator',
    name: 'Email Name Generator',
    description: 'Generate professional email name suggestions from your full name for personal or business use.',
    longDescription: 'Finding the perfect professional email address? Enter your name and preferred domain to get dozens of polished, professional email suggestions. Great for setting up a new business email, personal brand, or choosing between email naming conventions.',
    icon: '✎',
    category: 'Generators',
  },
];

export function getToolBySlug(slug: string): Tool | undefined {
  return tools.find((t) => t.slug === slug);
}

export function getPopularTools(): Tool[] {
  return tools.filter((t) => t.popular);
}

export const toolCategories = [...new Set(tools.map((t) => t.category))];
