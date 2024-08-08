'use client'
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { TypewriterEffect } from './typewriter-effect';
import {useTranslations} from 'next-intl';

function HandleCall() {
  window.location.href = 'tel:+5491131500591';
}

function JoinUsForm() {
  const [state, handleSubmit] = useForm("myyqlkdn");
  const t = useTranslations('JoinUsForm');

  if (state.succeeded) {
    return (
      <div className="flex items-center justify-center h-full fixed z-1">
        <p className="text-4xl font-semibold text-white">
          {t("p1")} <br /> {t("p2")}
        </p>
      </div>
    );
  }

  const words = [
    { text: t("formword1"), className: "text-white text-4xl lg:text-6xl" },
    { text: t("formword2"), className: "text-white text-4xl lg:text-6xl" },
    { text: t("formword3"), className: "text-white text-4xl lg:text-6xl" },
    { text: t("formword4"), className: "text-white text-4xl lg:text-6xl" }
  ];
  

  return (
    <section id="join us" className="relative ">
      <div className="relative flex flex-col justify-center overflow-hidden pb-12 pt-12">
        <div className="w-full p-6 m-auto rounded-md lg:max-w-3xl">
          <TypewriterEffect words={words} />
          <form className="mt-6 text-left p-4 lg:p-6" onSubmit={handleSubmit}>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div className="mb-2">
      <label>
        <span className="text-white text-xl font-[500]">{t("span1")}</span>
        <input
          type="text"
          name="name"
          className="
            block
            w-full
            my-4
            px-4
            py-3
            bg-[#07112B]
            border-white
            rounded-2xl
            text-xl
            shadow-sm
            text-white
            focus:border-white
            focus:ring
            focus:ring-white
          "
          required
        />
      </label>
    </div>
    <div className="mb-2">
      <label>
        <span className="text-white text-xl font-[500]">{t("span2")}</span>
        <input
          type="text"
          name="lastname"
          className="
            block
            w-full
            my-4
            px-4
            py-3
            bg-[#07112B]
            border-white
            rounded-2xl
            text-xl
            shadow-sm
            text-white
            focus:border-white
            focus:ring
            focus:ring-white
          "
          required
        />
      </label>
    </div>
    <div className="mb-2">
      <label>
        <span className="text-white text-xl font-[500]">*Email</span>
        <input
          name="email"
          type="email"
          className="
            block
            w-full
            my-4
            px-4
            py-3
            bg-[#07112B]
            border-white
            text-xl
            rounded-2xl
            shadow-sm
            text-white
            focus:border-white
            focus:ring
            focus:ring-white
          "
          required
        />
      </label>
    </div>
    <div className="mb-2">
      <label>
        <span className="text-white text-xl font-[500]">{t("span3")}</span>
        <input
          name="Numero"
          type="text"
          className="
            block
            w-full
            text-xl
            my-4
            px-4
            py-3
            bg-[#07112B]
            border-white
            rounded-2xl
            shadow-sm
            text-white
            focus:border-white
            focus:ring
            focus:ring-white
          "
          required
        />
      </label>
    </div>
    <div className="mb-2">
      <label>
        <span className="text-white text-xl font-[500]">{t("span4")}</span>
        <input
          type="url"
          name="linkedin"
          className="
            block
            w-full
            my-4
            px-4
            py-3
            bg-[#07112B]
            border-white
            rounded-2xl
            text-xl
            shadow-sm
            text-white
            focus:border-white
            focus:ring
            focus:ring-white
          "
        />
      </label>
    </div>
    <div className="mb-2">
      <label>
        <span className="text-white text-xl font-[500]">{t("span5")}</span>
        <select
          name="skills"
          className="
            block
            w-full
            text-xl
            my-4
            px-4
            py-3
            bg-[#07112B]
            border-white
            rounded-2xl
            shadow-sm
            text-white
            focus:border-white
            focus:ring
            focus:ring-white
          "
          required
        >
          <option value="" disabled selected>{t("option1")}</option>
          <option value="frontend">{t("option2")}</option>
          <option value="fullstack">{t("option3")}</option>
          <option value="devops">Dev Ops</option>
          <option value="qa">QA</option>
          <option value="datascience">{t("option4")}</option>
        </select>
      </label>
    </div>
    <div className="mb-2 col-span-1">
      <label>
        <span className="text-white text-xl font-[500]">{t("span6")}</span>
        <textarea
          name="message"
          className="
            block
            text-xl
            w-full
            my-4
            px-4
            py-3
            bg-[#07112B]
            border-white
            rounded-2xl
            shadow-sm
            text-white
            focus:border-white
            focus:ring
            focus:ring-white
          "
          required
        ></textarea>
      </label>
    </div>
  </div>
  <div className="mt-6">
    <button
      className="relative hover:-translate-y-[-8px] transition px-6 text-xl inline-flex h-12 animate-shimmer items-center justify-center rounded-[40px] bg-[linear-gradient(110deg,#1C32BB,45%,#A0ABEA,55%,#1C32BB)] bg-[length:200%_100%] font-medium text-white focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
      type="submit"
      disabled={state.submitting}
    >
      {t("button")}
    </button>
  </div>
  <ValidationError
    prefix="Error"
    field="submit"
    errors={state.errors}
  />
</form>

        </div>
      </div>
    </section>
  );
}

export default JoinUsForm;