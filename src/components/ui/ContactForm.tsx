"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  nome: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("E-mail inválido"),
  telefone: z.string().min(10, "Telefone inválido").optional().or(z.literal("")),
  assunto: z.enum(["residencial", "b2b", "corporativo", "visita-fabrica", "outro"], {
    message: "Selecione um assunto",
  }),
  mensagem: z.string().min(20, "Mensagem deve ter pelo menos 20 caracteres"),
});

type FormData = z.infer<typeof schema>;

const inputStyle = {
  width: "100%",
  backgroundColor: "var(--color-gray-900)",
  border: "1px solid rgba(201,169,110,0.2)",
  color: "var(--color-white)",
  fontFamily: "var(--font-sans)",
  fontSize: "0.875rem",
  fontWeight: 300,
  padding: "0.875rem 1.25rem",
  outline: "none",
  transition: "border-color 0.3s ease",
};

const labelStyle = {
  display: "block",
  fontFamily: "var(--font-sans)",
  fontSize: "0.6rem",
  fontWeight: 500,
  letterSpacing: "0.25em",
  textTransform: "uppercase" as const,
  color: "var(--color-gray-400)",
  marginBottom: "0.5rem",
};

const errorStyle = {
  fontFamily: "var(--font-sans)",
  fontSize: "0.7rem",
  color: "#e07070",
  marginTop: "0.35rem",
};

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setSubmitting(true);
    // Simular envio
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitted(true);
    setSubmitting(false);
    reset();
  };

  if (submitted) {
    return (
      <div
        style={{
          padding: "4rem",
          border: "1px solid rgba(201,169,110,0.3)",
          textAlign: "center",
        }}
      >
        <div
          aria-hidden="true"
          style={{
            width: "48px",
            height: "48px",
            border: "1px solid var(--color-gold)",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 1.5rem",
          }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round">
            <polyline points="4 10 8 14 16 6" />
          </svg>
        </div>
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.8rem",
            fontWeight: 300,
            color: "var(--color-white)",
            marginBottom: "0.75rem",
          }}
        >
          Mensagem enviada.
        </h3>
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.875rem",
            fontWeight: 300,
            color: "var(--color-gray-400)",
          }}
        >
          Entraremos em contato em breve com uma proposta personalizada.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate aria-label="Formulário de contato">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "1.5rem",
          marginBottom: "1.5rem",
        }}
      >
        {/* Nome */}
        <div>
          <label htmlFor="contact-nome" style={labelStyle}>
            Nome *
          </label>
          <input
            id="contact-nome"
            type="text"
            autoComplete="name"
            aria-invalid={!!errors.nome}
            aria-describedby={errors.nome ? "error-nome" : undefined}
            {...register("nome")}
            style={inputStyle}
            onFocus={(e) => (e.target.style.borderColor = "var(--color-gold)")}
            onBlur={(e) => (e.target.style.borderColor = "rgba(201,169,110,0.2)")}
          />
          {errors.nome && (
            <p id="error-nome" style={errorStyle} role="alert">
              {errors.nome.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="contact-email" style={labelStyle}>
            E-mail *
          </label>
          <input
            id="contact-email"
            type="email"
            autoComplete="email"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "error-email" : undefined}
            {...register("email")}
            style={inputStyle}
            onFocus={(e) => (e.target.style.borderColor = "var(--color-gold)")}
            onBlur={(e) => (e.target.style.borderColor = "rgba(201,169,110,0.2)")}
          />
          {errors.email && (
            <p id="error-email" style={errorStyle} role="alert">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "1.5rem",
          marginBottom: "1.5rem",
        }}
      >
        {/* Telefone */}
        <div>
          <label htmlFor="contact-telefone" style={labelStyle}>
            Telefone
          </label>
          <input
            id="contact-telefone"
            type="tel"
            autoComplete="tel"
            {...register("telefone")}
            style={inputStyle}
            onFocus={(e) => (e.target.style.borderColor = "var(--color-gold)")}
            onBlur={(e) => (e.target.style.borderColor = "rgba(201,169,110,0.2)")}
          />
        </div>

        {/* Assunto */}
        <div>
          <label htmlFor="contact-assunto" style={labelStyle}>
            Assunto *
          </label>
          <select
            id="contact-assunto"
            aria-invalid={!!errors.assunto}
            aria-describedby={errors.assunto ? "error-assunto" : undefined}
            {...register("assunto")}
            style={{
              ...inputStyle,
              cursor: "pointer",
              appearance: "none",
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%23C9A96E' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 1rem center",
            }}
            onFocus={(e) => (e.target.style.borderColor = "var(--color-gold)")}
            onBlur={(e) => (e.target.style.borderColor = "rgba(201,169,110,0.2)")}
          >
            <option value="">Selecione...</option>
            <option value="residencial">Projeto Residencial</option>
            <option value="b2b">Parceria B2B</option>
            <option value="corporativo">Projeto Corporativo</option>
            <option value="visita-fabrica">Visita à Fábrica</option>
            <option value="outro">Outro</option>
          </select>
          {errors.assunto && (
            <p id="error-assunto" style={errorStyle} role="alert">
              {errors.assunto.message}
            </p>
          )}
        </div>
      </div>

      {/* Mensagem */}
      <div style={{ marginBottom: "2rem" }}>
        <label htmlFor="contact-mensagem" style={labelStyle}>
          Mensagem *
        </label>
        <textarea
          id="contact-mensagem"
          rows={6}
          aria-invalid={!!errors.mensagem}
          aria-describedby={errors.mensagem ? "error-mensagem" : undefined}
          {...register("mensagem")}
          style={{ ...inputStyle, resize: "vertical", lineHeight: 1.8 }}
          onFocus={(e) => (e.target.style.borderColor = "var(--color-gold)")}
          onBlur={(e) => (e.target.style.borderColor = "rgba(201,169,110,0.2)")}
          placeholder="Descreva seu projeto, espaço e expectativas..."
        />
        {errors.mensagem && (
          <p id="error-mensagem" style={errorStyle} role="alert">
            {errors.mensagem.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        id="contact-submit"
        disabled={submitting}
        className="btn btn-outline"
        aria-label="Enviar mensagem"
        style={{
          width: "100%",
          justifyContent: "center",
          opacity: submitting ? 0.7 : 1,
          cursor: submitting ? "wait" : "pointer",
        }}
      >
        {submitting ? "Enviando..." : "Enviar mensagem"}
      </button>
    </form>
  );
}
