import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

const FeatureList = [
  {
    title: 'Easy to Integrate',
    Svg: '/img/easy-to-use.svg',
    description: (
      <>
        The Lumin API is designed to help you quickly connect your apps with document workflows — from editing to signing and automation.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: '/img/focus-to-what-matter.svg',
    description: (
      <>
        We handle the heavy lifting — storage, compliance, security, and workflow management — so you can focus on delivering the features that matter most to your users.
      </>
    ),
  },
  {
    title: 'Flexible & Extensible',
    Svg: '/img/custom-with-react.svg',
    description: (
      <>
        Use our APIs to extend or customize Lumin to fit your business needs. Whether it's document editing, eSignature, or data-driven automation, you can adapt Lumin to your workflow.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} src={useBaseUrl(Svg)} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
