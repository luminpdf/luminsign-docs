import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: '/img/easy-to-use.svg',
    description: (
      <>
        Lumin Sign was designed from the ground up to make it easy to get your signing flow up and running quickly.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: '/img/focus-to-what-matter.svg',
    description: (
      <>
        Lumin Sign lets you focus on your app, and we&apos;ll do the chores. Go
        ahead and work on the functionality that matters.
      </>
    ),
  },
  {
    title: 'Customize with React',
    Svg: '/img/custom-with-react.svg',
    description: (
      <>
        Extend or customize your Lumin Sign integration using React.
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
