import React from "react";
import { useTransition, useState } from "react";
import TabButton from "./TabButton";

//1d
const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
          <ul className="list-disc pl-2">
                <li>Next.js est</li>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Java Programming</li>
                <li>Python</li>
                <li>PHP</li>
                <li>React</li>
                <li>Yii2 Framework</li>
          </ul>
        ),
    },
    {
        title: "Experiences",
        id: "experiences",
        content: (
          <ul className="list-disc pl-2">
            <li>ETH KL</li>
            <li>ETHGlobal Superhack</li>
            <li>Solana Hyperdrive</li>
            <li>APUBCC Sparkathon</li>
            <li>Encode Club</li>
            <li>Tune Protect Hackathon</li>
            <li>geNFesT Ideathon</li>
          </ul>
        ),
    },
    {
        title: "Education",
        id: "education",
        content: (
          <ul className="list-disc pl-2">
                <li>Asia Pacific University</li>
                <li>UCSI International Highschool</li>
          </ul>
        ),
    }
    {
        title: "Interest",
        id: "interest",
        content: (
          <ul className="list-disc pl-2">
            <li>Gaming</li>
            <li>Stock Trading</li>
          </ul>
        ),
    },
];
//1
const AboutMe = () => {
    //1b
    const[tab, setTab] = useState("skills");
    const[isPending, startTransition] = useTransition();
    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };
    //1a
    return(
        <section className="text-white grid" id="aboutMe">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:px-32 py-16 xl-gap-16 items-center">
                <div>
                    <img src="/AboutMe.png" alt="About Me" width={450} height={450} style={{ borderRadius: "25px" }}/>
                </div>
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h1 className="text-4xl font-bold text-white mb-4">About Me</h1>
                    <p className="text-base text-justify lg:text-lg">I am currently pursuing a degree in Software Engineering at APU, where I have been honing my skills in various technologies. I am familiar in frontend development, with expertise in React, Next.js, HTML, CSS, and I'm skilled in creating visually appealing and user-friendly interfaces using JavaScript and CSS.
                        Additionally, I've recently embarked on the exciting journey of trading stocks, and while I'm still navigating the complexities of traditional financial markets, my curiosity extends to the realm of cryptocurrencies as well.
                        My passion for technology and problem-solving has led me to participate in a few hackathons this year, where I primarily serve as a Web Developer. </p>
                    <div className="flex flex-row mt-8">
{/* 1e */}
                        <TabButton 
                        selectTab={() => handleTabChange("skills")}
                        active= {tab === "skills"}
                        >
                            
                            Skills
                        </TabButton>

                        <TabButton 
                        selectTab={() => handleTabChange("experiences")}
                        active= {tab === "experiences"}
                        >
                            {" "}
                            Experiences{" "}
                        </TabButton>

                        <TabButton 
                        selectTab={() => handleTabChange("education")}
                        active= {tab === "education"}
                        >
                            {" "}
                            Education{" "}
                        </TabButton>
                        
                        <TabButton 
                        selectTab={() => handleTabChange("interest")}
                        active= {tab === "interest"}
                        >
                            {" "}
                            Interest{" "}
                        </TabButton>
                    </div>
                    <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
                </div>

            </div>
        </section>

    );
};
export default AboutMe;
