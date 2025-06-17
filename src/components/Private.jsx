import React from 'react';

const PrivacyPolicy = () => {
  return (
    <section className="px-4 md:px-8 py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-y-8 md:gap-x-16">
          <div className="col-span-12 lg:col-span-4">
            <div className="md:sticky md:top-8">
              <h2 className="text-xl text-[#e7e7e7] font-semibold">Privacy Policy</h2>
            </div>
          </div>
          <div className="col-span-12 space-y-12 lg:col-span-7 lg:col-start-6 text-[#c4c4c4]">
            <div className="space-y-6">
              <p className='text-[18px] mb-[24px]'>
                This Privacy Policy is for the benefit of visitors to our website. It will tell you how
                we look after your personal data as your privacy is important to us. Design Declares
                protects your privacy with Cabin analytics – this means:
              </p>
              <ul className="list-disc pl-4 my-[48px]">
                <li>No cookies</li>
                <li>No data sharing</li>
                <li>No ad networks</li>
                <li>Carbon neutral</li>
                <li>Fast and lightweight</li>
                <li>Compliant with all privacy laws</li>
              </ul>
              <p className='my-[24px]'>
                Cabin is built on the concept of privacy-by-design. Visitor data is stored in a unique
                data structure which makes it 100% anonymous and compliant with all privacy laws,
                globally. To learn more about Cabin,{' '}
                <a
                  className="underline transition-colors hover:text-[#ef603d]"
                  href="https://withcabin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  click here
                </a>.
              </p>
              <p className='my-[24px]'>
                Design Declares collects emails and names via Brevo and will use the information
                you provide via Brevo to be in touch with you.
              </p>
              <p className='my-[24px]'>
                We use the data collected by our website to monitor trends to enable us to
                monitor how our website is being used, so that we can operate more effectively
                towards audience needs and expectations. Emails and names gathered via Brevo will
                be used to send updates and marketing related to Design Declares as a service,
                product or insight. This includes all subsidiaries and partnering agencies involved
                in the curation of Design Declares.
              </p>
              <p className='my-[24px]'>
                We will not actively send your data anywhere globally, however Cabin or Brevo may
                do this. Platforms such as these subscribe to the EU-US Privacy Shield framework
                which means that it has agreed to work with the appropriate regulatory authorities
                to resolve any complaints regarding the transfer of personal data, where these
                complaints cannot be resolved directly. Organisations subscribing to the EU-US
                Privacy Shield framework are considered to be permitted destinations for personal
                data by the EU.
              </p>
              <p className='my-[24px]'>
                We will retain your IP address for 90 days after which time it is automatically
                removed. Emails via Brevo will be kept indefinitely to market products, services
                and insights related to Design Declares. Personal details can be removed via Brevo
                by unsubscribing at the bottom of any email send out.
              </p>
              <p className='mt-[24px]'>
                If you have any questions or concerns about our use of your personal information,
                please let us know by sending an email to{' '}
                <a
                  className="underline transition-colors hover:text-[#ef603d]"
                  href="mailto:hello@designdeclares.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  hello@designdeclares.com
                </a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;