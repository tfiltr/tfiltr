-- This script was generated by the Schema Diff utility in pgAdmin 4
-- For the circular dependencies, the order in which Schema Diff writes the objects is not very sophisticated
-- and may require manual changes to the script to ensure changes are applied in the correct order.
-- Please report an issue for any failure with the reproduction steps.

ALTER TABLE IF EXISTS public."Service" DROP COLUMN IF EXISTS name;

ALTER TABLE IF EXISTS public."Service"
    ADD COLUMN "placeId" text COLLATE pg_catalog."default" NOT NULL DEFAULT ''::text;

COMMENT ON COLUMN public."Service"."placeId"
    IS 'PlaceId from Google Maps API';

ALTER TABLE IF EXISTS public."Service"
    ADD COLUMN "serviceType" uuid;

COMMENT ON COLUMN public."Service"."serviceType"
    IS 'The service type';
ALTER TABLE IF EXISTS public."Service"
    ADD CONSTRAINT "Service_placeId_key" UNIQUE ("placeId");
