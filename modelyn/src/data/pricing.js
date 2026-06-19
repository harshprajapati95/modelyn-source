export const pricingPlans = [
  {
    id: 'free',
    name: 'Free',
    tagline: 'Ship a first model and see what Modelyn feels like.',
    monthly: 0,
    annual: 0,
    popular: false,
    cta: 'Request Early Access',
    features: [
      '1 deployed endpoint',
      '50 compute minutes / month',
      'Community support',
      'Basic latency & throughput metrics',
      '7-day log retention',
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    tagline: 'For teams running real traffic in production.',
    monthly: 79,
    annual: 63,
    popular: true,
    cta: 'Request Early Access',
    features: [
      '10 deployed endpoints',
      '2,000 compute minutes / month',
      'Autoscaling & GPU scheduling',
      'Drift detection & alerts',
      'Versioning & one-click rollbacks',
      '30-day log retention',
      'Priority email & chat support',
    ],
  },
  {
    id: 'scale',
    name: 'Scale',
    tagline: 'For platform teams running ML at scale.',
    monthly: null,
    annual: null,
    popular: false,
    cta: 'Talk to Sales',
    features: [
      'Unlimited endpoints',
      'Custom compute commitments',
      'Dedicated GPU capacity',
      'SSO, SAML & audit logs',
      'Custom data retention & DPA',
      'Dedicated Slack channel',
      '99.99% uptime SLA',
    ],
  },
];

export const compute = {
  unit: 'compute minute',
  description:
    'A compute minute is one minute of model execution time on a standard CPU instance. GPU minutes are metered at a multiplier based on accelerator class, and idle endpoints that have scaled to zero use none.',
  multipliers: [
    { tier: 'CPU (standard)', rate: '1× compute minute' },
    { tier: 'GPU — T4 class', rate: '4× compute minute' },
    { tier: 'GPU — A10 / L4 class', rate: '8× compute minute' },
    { tier: 'GPU — A100 / H100 class', rate: '20× compute minute' },
  ],
};

export const featureMatrix = [
  { feature: 'Deployed endpoints', free: '1', pro: '10', scale: 'Unlimited' },
  { feature: 'Compute minutes / month', free: '50', pro: '2,000', scale: 'Custom' },
  { feature: 'Autoscaling', free: false, pro: true, scale: true },
  { feature: 'GPU scheduling', free: false, pro: true, scale: true },
  { feature: 'Drift detection', free: false, pro: true, scale: true },
  { feature: 'Versioning & rollbacks', free: 'Last 3 versions', pro: 'Unlimited', scale: 'Unlimited' },
  { feature: 'Log retention', free: '7 days', pro: '30 days', scale: 'Custom' },
  { feature: 'SSO / SAML', free: false, pro: false, scale: true },
  { feature: 'Uptime SLA', free: false, pro: '99.9%', scale: '99.99%' },
  { feature: 'Support', free: 'Community', pro: 'Priority', scale: 'Dedicated' },
];
