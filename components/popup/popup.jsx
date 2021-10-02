import React, { useState } from "react";

//styles
import styles from "./popup.module.scss";

//react-icons
import { TiDelete } from "react-icons/ti";

//react-hook-form
import { useForm } from "react-hook-form";

//utils
import { addEmail } from "../../config/utils";

const Popup = ({ setToggle }) => {
  const { register, handleSubmit } = useForm();
  const [email, setEmail] = useState("");

  const Submit = async (data) => {
    setEmail("");
    addEmail(data.email);
    setToggle(false);
  };

  return (
    <div className={styles.popupContainer}>
      <div className={styles.popup}>
        <div className={styles.theme}></div>
        <div className={styles.text}>
          <TiDelete
            style={{
              alignSelf: "flex-end",
              fontSize: "20px",
              cursor: "pointer",
            }}
            onClick={() => setToggle(false)}
          ></TiDelete>
          <span>MagEnsao</span>
          <h3>SUBSCRIBE!</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Architecto, consectetur quam?
          </p>
          <form onSubmit={handleSubmit(Submit)} autoComplete="off">
            <input
              name="email"
              type="email"
              placeholder="E-mail adresse"
              ref={register({ required: true })}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Popup;
