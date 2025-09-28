import { NextRequest, NextResponse } from "next/server";
import { Strapi } from "../../../utils/strapi";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    console.log("Formulário recebido:", {
      timestamp: new Date().toISOString(),
      ...data,
    });

    await Strapi.public("riloa-form-leads", {
      method: "POST",
      body: JSON.stringify({
        data: {
          email: data.email,
          name: data.name,
          phone: data.phone,
          details: data.details,
        },
      }),
    });

    return NextResponse.json(
      { message: "Formulário enviado com sucesso!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erro ao processar formulário:", error);

    return NextResponse.json(
      { message: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
