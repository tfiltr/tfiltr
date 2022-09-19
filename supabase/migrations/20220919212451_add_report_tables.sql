-- This script was generated by the Schema Diff utility in pgAdmin 4
-- For the circular dependencies, the order in which Schema Diff writes the objects is not very sophisticated
-- and may require manual changes to the script to ensure changes are applied in the correct order.
-- Please report an issue for any failure with the reproduction steps.

CREATE TABLE IF NOT EXISTS public."Reports"
(
    id uuid NOT NULL DEFAULT uuid_generate_v4(),
    title text COLLATE pg_catalog."default" NOT NULL,
    score real NOT NULL,
    summary text COLLATE pg_catalog."default" NOT NULL,
    service uuid NOT NULL,
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    updated_at timestamp with time zone NOT NULL DEFAULT now(),
    CONSTRAINT "Reports_pkey" PRIMARY KEY (id),
    CONSTRAINT "Reports_service_fkey" FOREIGN KEY (service)
        REFERENCES public."Service" (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."Reports"
    OWNER to postgres;

ALTER TABLE IF EXISTS public."Reports"
    ENABLE ROW LEVEL SECURITY;

GRANT ALL ON TABLE public."Reports" TO anon;

GRANT ALL ON TABLE public."Reports" TO authenticated;

GRANT ALL ON TABLE public."Reports" TO postgres;

GRANT ALL ON TABLE public."Reports" TO service_role;

CREATE TABLE IF NOT EXISTS public."ReportQuestions"
(
    id bigint NOT NULL GENERATED BY DEFAULT AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1 ),
    question text COLLATE pg_catalog."default" NOT NULL,
    type text COLLATE pg_catalog."default" NOT NULL,
    subheading text COLLATE pg_catalog."default",
    "responseOptions" json,
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    updated_at timestamp with time zone NOT NULL DEFAULT now(),
    CONSTRAINT "ReportQuestions_pkey" PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."ReportQuestions"
    OWNER to postgres;

ALTER TABLE IF EXISTS public."ReportQuestions"
    ENABLE ROW LEVEL SECURITY;

GRANT ALL ON TABLE public."ReportQuestions" TO anon;

GRANT ALL ON TABLE public."ReportQuestions" TO authenticated;

GRANT ALL ON TABLE public."ReportQuestions" TO postgres;

GRANT ALL ON TABLE public."ReportQuestions" TO service_role;

CREATE TABLE IF NOT EXISTS public."ReportAnswers"
(
    id bigint NOT NULL GENERATED BY DEFAULT AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1 ),
    response json NOT NULL,
    report uuid NOT NULL,
    "reportQuestion" bigint NOT NULL,
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    updated_at timestamp with time zone NOT NULL DEFAULT now(),
    CONSTRAINT "ReportAnswers_pkey" PRIMARY KEY (id),
    CONSTRAINT "ReportAnswers_reportQuestion_fkey" FOREIGN KEY ("reportQuestion")
        REFERENCES public."ReportQuestions" (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT "ReportAnswers_report_fkey" FOREIGN KEY (report)
        REFERENCES public."Reports" (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."ReportAnswers"
    OWNER to postgres;

ALTER TABLE IF EXISTS public."ReportAnswers"
    ENABLE ROW LEVEL SECURITY;

GRANT ALL ON TABLE public."ReportAnswers" TO anon;

GRANT ALL ON TABLE public."ReportAnswers" TO authenticated;

GRANT ALL ON TABLE public."ReportAnswers" TO postgres;

GRANT ALL ON TABLE public."ReportAnswers" TO service_role;

CREATE TABLE IF NOT EXISTS public."ServiceTypes"
(
    id bigint NOT NULL GENERATED BY DEFAULT AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1 ),
    name text COLLATE pg_catalog."default" NOT NULL,
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    updated_at timestamp with time zone NOT NULL DEFAULT now(),
    CONSTRAINT "ServiceTypes_pkey" PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."ServiceTypes"
    OWNER to postgres;

ALTER TABLE IF EXISTS public."ServiceTypes"
    ENABLE ROW LEVEL SECURITY;

GRANT ALL ON TABLE public."ServiceTypes" TO anon;

GRANT ALL ON TABLE public."ServiceTypes" TO authenticated;

GRANT ALL ON TABLE public."ServiceTypes" TO postgres;

GRANT ALL ON TABLE public."ServiceTypes" TO service_role;

CREATE TABLE IF NOT EXISTS public."ReportQuestionServiceType"
(
    "serviceType" bigint NOT NULL,
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    updated_at timestamp with time zone NOT NULL DEFAULT now(),
    "reportQuestion" bigint NOT NULL,
    CONSTRAINT "ReportQuestionServiceType_pkey" PRIMARY KEY ("serviceType", "reportQuestion"),
    CONSTRAINT "ReportQuestionServiceType_serviceType_key" UNIQUE ("serviceType"),
    CONSTRAINT "ReportQuestionServiceType_reportQuestion_fkey" FOREIGN KEY ("reportQuestion")
        REFERENCES public."ReportQuestions" (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT "ReportQuestionServiceType_serviceType_fkey" FOREIGN KEY ("serviceType")
        REFERENCES public."ServiceTypes" (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."ReportQuestionServiceType"
    OWNER to postgres;

ALTER TABLE IF EXISTS public."ReportQuestionServiceType"
    ENABLE ROW LEVEL SECURITY;

GRANT ALL ON TABLE public."ReportQuestionServiceType" TO authenticated;

GRANT ALL ON TABLE public."ReportQuestionServiceType" TO anon;

GRANT ALL ON TABLE public."ReportQuestionServiceType" TO service_role;

GRANT ALL ON TABLE public."ReportQuestionServiceType" TO postgres;
