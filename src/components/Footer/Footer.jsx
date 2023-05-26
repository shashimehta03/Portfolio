import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Footer.module.scss";
import {motion} from 'framer-motion'
const Footer = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>
      
      
      <motion.div
      variants={footerVariants}
      className={`innerWidth yPaddings flexCenter ${css.container}`}>
        <div className={css.left}>
          <span className="primaryText">
            Let's make something <br />
            amazing together.
          </span>
          <span className="primaryText">
            Start by <a href="mailto:itsmeshashi29@gmail.com">saying hi</a>
          </span>
        </div>

        <div className={css.right}>
          <div className={css.info}>
            <span className="secondaryText">Information</span>
            <p>+91 7349971366</p>
          </div>
          <ul className={css.menu}>
            <li><a href="https://www.linkedin.com/in/shashi-mehta-961340229/">Linkedin</a></li>
            <li><a href="https://leetcode.com/shashi_mehta/">Leetcode</a></li>
            <li><a href="https://www.instagram.com/invites/contact/?i=d5h4nas9g2in&utm_content=25r01r9">Instagram</a></li>
            <li><a href="https://github.com/shashimehta03">Github</a></li>
            <li><a href="https://www.codechef.com/users/cu_21bcs7093">Codechef</a></li>
            

          </ul>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;
