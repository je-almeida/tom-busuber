"use client";

import { useState } from "react";

interface FormField {
  name: string;
  label: string;
  type: string;
  required: boolean;
  placeholder?: string;
  helper?: string;
  options?: string[];
}

interface ContactFormProps {
  active?: boolean;
  title: string;
  subtitle: string;
  fields: FormField[];
  consent: {
    text: string;
    required: boolean;
  };
  submitText: string;
  primaryColor: string;
  secondaryColor: string;
  $bgColor?: string;
}

export default function ContactForm(data: ContactFormProps) {
  const {
    active,
    title,
    subtitle,
    fields,
    consent,
    submitText,
    primaryColor,
    secondaryColor,
    $bgColor,
  } = data;
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checkbox = e.target as HTMLInputElement;
      setFormData((prev) => ({
        ...prev,
        [name]: checkbox.checked ? "true" : "false",
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Formulário enviado com sucesso!");
        setFormData({});
      } else {
        alert("Erro ao enviar formulário. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro:", error);
      alert("Erro ao enviar formulário. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderField = (field: FormField) => {
    const commonProps = {
      id: field.name,
      name: field.name,
      required: field.required,
      value: formData[field.name] || "",
      onChange: handleChange,
      className:
        "w-full px-3 py-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:border-transparent",
      style: { borderColor: "#ddd", fontSize: "16px" },
    };

    switch (field.type) {
      case "select":
        return (
          <select {...commonProps}>
            <option value="">Selecione</option>
            {field.options?.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        );

      case "textarea":
        return (
          <textarea
            {...commonProps}
            rows={4}
            style={{
              ...commonProps.style,
              resize: "vertical" as const,
            }}
          />
        );

      default:
        return (
          <input
            {...commonProps}
            type={field.type}
            placeholder={field.placeholder}
          />
        );
    }
  };

  if (active === false) {
    return null;
  }

  return (
    <section className="py-16" style={{ background: $bgColor }}>
      <div className="container mx-auto px-4">
        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-sm"
        >
          {/* Form Header */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <p className="text-gray-600">{subtitle}</p>
          </div>

          {/* Form Fields */}
          <div className="space-y-6" id="contato">
            {fields.map((field, index) => {
              // Check if this field should be in a flex row with the next field
              const isEmailField = field.name === "email";
              const isTelefoneField = field.name === "telefone";
              const isEmpresaField = field.name === "empresa";
              const isColaboradoresField = field.name === "colaboradores";

              const shouldRenderInRow =
                (isEmailField && fields[index + 1]?.name === "telefone") ||
                (isEmpresaField && fields[index + 1]?.name === "colaboradores");

              const isSecondInRow = isTelefoneField || isColaboradoresField;

              if (isSecondInRow) {
                return null; // Skip rendering, will be rendered with previous field
              }

              return (
                <div key={field.name}>
                  {shouldRenderInRow ? (
                    <div className="flex flex-col md:flex-row gap-4">
                      {/* First field */}
                      <div className="flex-1 min-w-0">
                        <label
                          htmlFor={field.name}
                          className="block mb-2 font-semibold text-gray-700"
                        >
                          {field.label} {field.required && "*"}
                        </label>
                        {field.helper && (
                          <small className="block mb-2 text-sm text-gray-500">
                            {field.helper}
                          </small>
                        )}
                        {renderField(field)}
                      </div>

                      {/* Second field */}
                      <div className="flex-1 min-w-0">
                        {fields[index + 1] && (
                          <>
                            <label
                              htmlFor={fields[index + 1].name}
                              className="block mb-2 font-semibold text-gray-700"
                            >
                              {fields[index + 1].label}{" "}
                              {fields[index + 1].required && "*"}
                            </label>
                            {fields[index + 1].helper && (
                              <small className="block mb-2 text-sm text-gray-500">
                                {fields[index + 1].helper}
                              </small>
                            )}
                            {renderField(fields[index + 1])}
                          </>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div>
                      <label
                        htmlFor={field.name}
                        className="block mb-2 font-semibold text-gray-700"
                      >
                        {field.label} {field.required && "*"}
                      </label>
                      {field.helper && (
                        <small className="block mb-2 text-sm text-gray-500">
                          {field.helper}
                        </small>
                      )}
                      {renderField(field)}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Consent Checkbox */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="consentimento"
                name="consentimento"
                required={consent.required}
                onChange={handleChange}
                className="mt-1"
              />
              <label
                htmlFor="consentimento"
                className="text-sm leading-relaxed text-gray-700"
              >
                {consent.text} {consent.required && "*"}
              </label>
            </div>

            {/* Submit Button */}
            <div className="text-center pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-10 py-4 text-white font-bold rounded-lg text-lg transition-colors hover:opacity-90 disabled:opacity-50"
                style={{ backgroundColor: primaryColor, color: secondaryColor }}
              >
                {isSubmitting ? "Enviando..." : submitText}
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
