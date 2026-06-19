import Terminal from '../../components/ui/Terminal';
import SectionHeading from '../../components/ui/SectionHeading';

const lines = [
  { text: 'modelyn deploy model.pkl', type: 'command', delayAfter: 450 },
  { text: 'Uploading model…', type: 'success', delayAfter: 500 },
  { text: 'Allocating GPU…', type: 'success', delayAfter: 550 },
  { text: 'Creating endpoint…', type: 'success', delayAfter: 500 },
  { text: 'Autoscaling enabled.', type: 'success', delayAfter: 450 },
  { text: 'Deployment successful.', type: 'success', delayAfter: 700 },
  { text: 'Endpoint:', type: 'info', delayAfter: 250 },
  { text: 'https://api.modelyn.ai/v1/predict', type: 'link', delayAfter: 350 },
];

export default function OneCommandDeploy() {
  return (
    <section className="section-py relative">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <SectionHeading
            align="left"
            eyebrow="Deploy"
            title="One command. A production endpoint."
            description="Skip the Dockerfile, the Helm chart, and the YAML. Point Modelyn at a model file, a Hugging Face repo, or a Python entrypoint, and get back a versioned HTTPS endpoint with autoscaling already turned on."
          />
          <Terminal lines={lines} copyText="modelyn deploy model.pkl" />
        </div>
      </div>
    </section>
  );
}
