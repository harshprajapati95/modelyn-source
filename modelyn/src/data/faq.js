export const pricingFaq = [
  {
    q: 'How is a compute minute calculated?',
    a: 'A compute minute is one minute of model execution time on a standard CPU instance. GPU workloads are metered at a multiplier depending on accelerator class, and an endpoint that has scaled to zero traffic uses none.',
  },
  {
    q: 'Can I change plans later?',
    a: 'Yes. You can move between Free, Pro, and Scale at any time. Upgrades take effect immediately, and downgrades take effect at the start of your next billing cycle.',
  },
  {
    q: 'What happens if I exceed my included compute minutes?',
    a: 'On Pro, additional usage is billed at a flat per-minute overage rate shown in your dashboard before you incur it. On Scale, compute commitments are negotiated up front so there are no surprise overages.',
  },
  {
    q: 'Do you support annual billing?',
    a: 'Yes. Switching to annual billing reduces your effective monthly rate by roughly 20% across every paid plan.',
  },
  {
    q: 'Is there a free trial for Pro?',
    a: 'Early access participants get a 14-day Pro trial with full access to autoscaling, drift detection, and rollbacks before choosing a plan.',
  },
];

export const waitlistFaq = [
  {
    q: 'When will Modelyn be generally available?',
    a: 'We are onboarding early access teams in small batches now, with general availability planned for later this year. Waitlist position determines onboarding order.',
  },
  {
    q: 'What does early access include?',
    a: 'Early access teams get hands-on onboarding, a dedicated Slack channel with the founding engineers, and locked-in early pricing that carries forward after general availability.',
  },
  {
    q: 'Which frameworks are supported today?',
    a: 'PyTorch, TensorFlow, Hugging Face, ONNX, scikit-learn, and XGBoost are supported in the current early access build, with more runtimes shipping every few weeks.',
  },
  {
    q: 'Do I need to bring my own cloud account?',
    a: 'No. Modelyn runs deployments on managed infrastructure by default. Bring-your-own-cloud is available on the Scale plan for teams with existing compute commitments.',
  },
];
