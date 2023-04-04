CREATE TABLE "movies" (
	"id" serial NOT NULL,
	"name" varchar(50) NOT NULL,
	"status" varchar(50) NOT NULL,
	"createdAt" TIMESTAMP NOT NULL DEFAULT 'now()',
	"updateAt" TIMESTAMP NOT NULL,
	"plataformId" integer NOT NULL,
	"genreId" integer NOT NULL,
	CONSTRAINT "movies_pk" PRIMARY KEY ("id")
) ;



CREATE TABLE "plataforms" (
	"id" serial NOT NULL,
	"name" varchar(50) NOT NULL,
	"createdAt" TIMESTAMP NOT NULL DEFAULT 'now()',
	"updateAt" TIMESTAMP NOT NULL,
	CONSTRAINT "plataforms_pk" PRIMARY KEY ("id")
) ;



CREATE TABLE "genres" (
	"id" serial NOT NULL,
	"name" varchar(50) NOT NULL,
	"createdAt" TIMESTAMP NOT NULL DEFAULT 'now()',
	"updateAt" TIMESTAMP NOT NULL,
	CONSTRAINT "genres_pk" PRIMARY KEY ("id")
) ;



ALTER TABLE "movies" ADD CONSTRAINT "movies_fk0" FOREIGN KEY ("plataformId") REFERENCES "plataforms"("id");
ALTER TABLE "movies" ADD CONSTRAINT "movies_fk1" FOREIGN KEY ("genreId") REFERENCES "genres"("id");






