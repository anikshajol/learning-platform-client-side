import { Accordion } from "flowbite-react";
import React from "react";

const FAQ = () => {
  return (
    <div>
      <Accordion>
        <Accordion.Panel>
          <Accordion.Title>What is process of admission?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              We are running offline and online classes. You can join with us
              from anywhere.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>Is there any help for job sector? </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Yes we help those student who are qualified our exam.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>Who can do this course?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              CSE and NON CSE both can do this course. This course is beginner
              friendly.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
};

export default FAQ;
