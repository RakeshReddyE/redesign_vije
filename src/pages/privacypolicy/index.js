import React, { useEffect } from 'react';
import styles from './styles.module.css';
import NavBar from '../../components/navbar';
import Divider from '../../components/divider';
import Footer from '../../components/footer';
const PrivacyPolicy = () => {
  const privacyPolicyData = [
    {
      heading: 'Sub heading here',
      para1: `Pellentesque sit amet commodo ex. Praesent ac mi sed est interdum congue. Suspendisse enim urna, pulvinar vel consectetur maximus, hendrerit dictum ante. Ut vulputate eros risus, vitae sollicitudin libero interdum sollicitudin. Mauris lorem quam, posuere vel nibh quis, semper vestibulum mauris. Proin urna ligula, volutpat a diam in, iaculis maximus neque. Nam accumsan ullamcorper nunc pharetra sagittis. Pellentesque odio erat, maximus luctus elit a, blandit iaculis nisi. Praesent nisi justo, sagittis ut urna fringilla, consequat gravida diam. Proin varius dapibus metus, ac volutpat turpis semper sed. Donec hendrerit, quam nec porta imperdiet, purus massa facilisis risus, in varius nisi leo vel augue. Morbi in est augue. Maecenas lobortis non urna ac euismod. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi posuere pretium nisi ut pulvinar.`,
      para2: `Donec ornare sapien sit amet neque bibendum, et auctor velit tempus. Etiam sed lectus dignissim, porta risus in, egestas lorem. Nunc faucibus mattis lectus, a varius tellus rutrum ac. Aenean ac sollicitudin odio, ac pellentesque orci. Curabitur euismod at lectus sit amet vulputate. Nam venenatis nisi est, id tempus diam malesuada id. Quisque pharetra est quis placerat consequat. Vivamus a magna commodo, accumsan mi vitae, fermentum dolor. Morbi urna urna, consequat aliquam dignissim vitae, consectetur vitae tellus. Praesent vel iaculis felis. Pellentesque fringilla arcu semper mi facilisis, ac fringilla libero gravida. Praesent volutpat, lorem et eleifend cursus, nisl neque ultrices mi, sit amet rutrum ex est at lectus. Proin auctor maximus velit.`,
    },
    {
      heading: 'Sub heading here',
      para1: `Pellentesque sit amet commodo ex. Praesent ac mi sed est interdum congue. Suspendisse enim urna, pulvinar vel consectetur maximus, hendrerit dictum ante. Ut vulputate eros risus, vitae sollicitudin libero interdum sollicitudin. Mauris lorem quam, posuere vel nibh quis, semper vestibulum mauris. Proin urna ligula, volutpat a diam in, iaculis maximus neque. Nam accumsan ullamcorper nunc pharetra sagittis. Pellentesque odio erat, maximus luctus elit a, blandit iaculis nisi. Praesent nisi justo, sagittis ut urna fringilla, consequat gravida diam. Proin varius dapibus metus, ac volutpat turpis semper sed. Donec hendrerit, quam nec porta imperdiet, purus massa facilisis risus, in varius nisi leo vel augue. Morbi in est augue. Maecenas lobortis non urna ac euismod. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi posuere pretium nisi ut pulvinar.`,
      para2: `Donec ornare sapien sit amet neque bibendum, et auctor velit tempus. Etiam sed lectus dignissim, porta risus in, egestas lorem. Nunc faucibus mattis lectus, a varius tellus rutrum ac. Aenean ac sollicitudin odio, ac pellentesque orci. Curabitur euismod at lectus sit amet vulputate. Nam venenatis nisi est, id tempus diam malesuada id. Quisque pharetra est quis placerat consequat. Vivamus a magna commodo, accumsan mi vitae, fermentum dolor. Morbi urna urna, consequat aliquam dignissim vitae, consectetur vitae tellus. Praesent vel iaculis felis. Pellentesque fringilla arcu semper mi facilisis, ac fringilla libero gravida. Praesent volutpat, lorem et eleifend cursus, nisl neque ultrices mi, sit amet rutrum ex est at lectus. Proin auctor maximus velit.`,
    },
    {
      heading: 'Sub heading here',
      para1: `Pellentesque sit amet commodo ex. Praesent ac mi sed est interdum congue. Suspendisse enim urna, pulvinar vel consectetur maximus, hendrerit dictum ante. Ut vulputate eros risus, vitae sollicitudin libero interdum sollicitudin. Mauris lorem quam, posuere vel nibh quis, semper vestibulum mauris. Proin urna ligula, volutpat a diam in, iaculis maximus neque. Nam accumsan ullamcorper nunc pharetra sagittis. Pellentesque odio erat, maximus luctus elit a, blandit iaculis nisi. Praesent nisi justo, sagittis ut urna fringilla, consequat gravida diam. Proin varius dapibus metus, ac volutpat turpis semper sed. Donec hendrerit, quam nec porta imperdiet, purus massa facilisis risus, in varius nisi leo vel augue. Morbi in est augue. Maecenas lobortis non urna ac euismod. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi posuere pretium nisi ut pulvinar.`,
      para2: `Donec ornare sapien sit amet neque bibendum, et auctor velit tempus. Etiam sed lectus dignissim, porta risus in, egestas lorem. Nunc faucibus mattis lectus, a varius tellus rutrum ac. Aenean ac sollicitudin odio, ac pellentesque orci. Curabitur euismod at lectus sit amet vulputate. Nam venenatis nisi est, id tempus diam malesuada id. Quisque pharetra est quis placerat consequat. Vivamus a magna commodo, accumsan mi vitae, fermentum dolor. Morbi urna urna, consequat aliquam dignissim vitae, consectetur vitae tellus. Praesent vel iaculis felis. Pellentesque fringilla arcu semper mi facilisis, ac fringilla libero gravida. Praesent volutpat, lorem et eleifend cursus, nisl neque ultrices mi, sit amet rutrum ex est at lectus. Proin auctor maximus velit.`,
    },
  ];
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <div className={styles.privacyPolicyMainContainerStyles}>
      <NavBar theme={'dark'} />
      <div className={styles.privacyPolicyInnerContainerStyles}>
        <h1 className={styles.headingTextStyles}>Privacy policy</h1>
        <div className={styles.ContentContainerStyles}>
          {privacyPolicyData.map((item, index) => (
            <div key={index} className={styles.contentBlockStyles}>
              <h4 className={styles.subHeadingTextStyles}>{item.heading}</h4>
              <p className={styles.descTextStyles}>{item.para1}</p>
              <p className={styles.descTextStyles}>{item.para2}</p>
            </div>
          ))}
        </div>
      </div>
      <Divider />
      <Footer
        footerBottom={true}
        customFooterBottomStyles={styles.footerStyles}
        customFooterMainContainerStyles={styles.footerMainContainerStyles}
      />
    </div>
  );
};

export default PrivacyPolicy;
