<template>
  <Card>
    <template #title>
      <CardTitle title="Võistleja info" />
    </template>

    <template #content>
      <div class="p-fluid p-grid">
        <div class="p-field p-col-12 p-md-6">
          <div class="p-inputgroup">
            <span class="p-inputgroup-addon">
              <i class="pi pi-user"></i>
            </span>
            <span class="p-float-label">
              <InputText
                type="text"
                v-model="participant.firstname"
                :class="{ 'p-invalid': validationErrors.firstname }"
              />
              <label>Eesnimi</label>
            </span>
          </div>
          <small v-show="validationErrors.firstname" class="p-error">{{
            validationErrors.firstname
          }}</small>
        </div>

        <div class="p-field p-col-12 p-md-6">
          <div class="p-inputgroup">
            <span class="p-inputgroup-addon">
              <i class="pi pi-user"></i>
            </span>
            <span class="p-float-label">
              <InputText
                type="text"
                v-model="participant.lastname"
                :class="{ 'p-invalid': validationErrors.lastname }"
              />
              <label>Perekonnanimi</label>
            </span>
          </div>
          <small v-show="validationErrors.lastname" class="p-error">{{
            validationErrors.lastname
          }}</small>
        </div>

        <div class="p-field p-col-12">
          <div class="p-inputgroup">
            <span class="p-inputgroup-addon">
              <i class="pi pi-tag"></i>
            </span>
            <span class="p-float-label">
              <InputMask
                mask="a9999?999"
                v-model="participant.studentcode"
                :class="{ 'p-invalid': validationErrors.studentcode }"
              />
              <label>Matrikli number</label>
            </span>
          </div>
          <small v-show="validationErrors.studentcode" class="p-error">{{
            validationErrors.studentcode
          }}</small>
        </div>

        <div class="p-field p-col-12">
          <div class="p-inputgroup">
            <span class="p-inputgroup-addon">
              <i class="pi pi-envelope"></i>
            </span>
            <span class="p-float-label">
              <InputText
                type="email"
                v-model="participant.email"
                :class="{ 'p-invalid': validationErrors.email }"
              />
              <label>Email</label>
            </span>
          </div>
          <small v-show="validationErrors.email" class="p-error">{{
            validationErrors.email
          }}</small>
        </div>

        <div class="p-field p-col-12">
          <div class="p-inputgroup">
            <span class="p-inputgroup-addon">
              <i class="pi pi-briefcase"></i>
            </span>
            <span class="p-float-label">
              <Dropdown
                v-model="participant.studyfield"
                :options="studyfields"
                :class="{ 'p-invalid': validationErrors.studyfield }"
              />
              <label>Vali oma eriala</label>
            </span>
          </div>
          <small v-show="validationErrors.studyfield" class="p-error">{{
            validationErrors.studyfield
          }}</small>
        </div>
      </div>
    </template>

    <template #footer>
      <div class="p-fluid">
        <Button @click="submitData()" icon="pi pi-arrow-right" label="Edasi" />
      </div>
    </template>
  </Card>
</template>

<script>
import joi from "joi";
import Dropdown from "primevue/dropdown/sfc";
import Card from "primevue/card/sfc";
import InputText from "primevue/inputtext/sfc";
import InputMask from "primevue/inputmask/sfc";
import Button from "primevue/button/sfc";
import CardTitle from "@/layouts/CardTitle";

export default {
  name: "LoginWindow",
  components: {
    Dropdown,
    InputText,
    InputMask,
    Button,
    CardTitle,
    Card,
  },
  data: function() {
    return {
      participant: {
        firstname: undefined,
        lastname: undefined,
        studentcode: undefined,
        email: undefined,
        studyfield: undefined,
      },
      studyfields: [
        "Informaatika",
        "Matemaatika",
        "Arvutitehnika",
        "Matemaatiline statistika",
        "Muu",
      ],
      validationErrors: {},
      errorMessages: {
        "string.empty": `Väli on kohustuslik!`,
        "string.min": `Väli peab olema vähemalt {#limit} tähemärki pikk!`,
        "string.max": `Väli ei saa olla pikem {#limit} tähemärki!`,
        "string.alphanum": "Väli peab koosnema tähtedest ja numbritest!",
        "string.email": "Tegemist ei ole e-mailiga!",
        "string.pattern.base": "Väli peab koosnema tähtedest!",
        "any.required": `Väli on kohustuslik!`,
      },
    };
  },
  methods: {
    toast: function(error) {
      this.$toast.add({
        severity: "error",
        summary: "Veateade",
        detail: error,
        life: 3000,
      });
    },
    validateData: function() {
      const charSet = "A-Za-zÕõÄäÖöÜüŠšŽž";
      const nameRegex = new RegExp(`^[${charSet}]+([ .,-][${charSet}]+)*$`);
      const schema = joi.object().keys({
        firstname: joi
          .string()
          .min(3)
          .max(45)
          .required()
          .pattern(nameRegex)
          .label("Eesnimi")
          .messages(this.errorMessages),
        lastname: joi
          .string()
          .min(3)
          .max(45)
          .required()
          .pattern(nameRegex)
          .label("Perekonnanimi")
          .messages(this.errorMessages),
        studentcode: joi
          .string()
          .alphanum()
          .min(5)
          .max(8)
          .label("Matrikli number")
          .messages(this.errorMessages),
        email: joi
          .string()
          .email({ tlds: { allow: false } })
          .required()
          .label("Email")
          .messages(this.errorMessages),
        studyfield: joi
          .string()
          .required()
          .label("Eriala")
          .messages(this.errorMessages),
      });

      return schema.validate(this.participant, { abortEarly: false });
    },
    submitData: async function() {
      try {
        const validationResult = this.validateData();
        if (validationResult.error) {
          this.validationErrors = {};
          validationResult.error.details.forEach(
            err => (this.validationErrors[err.context.key] = err.message)
          );

          throw new Error("Vigane valideering!");
        }

        this.$emit("validated", this.participant);
      } catch (error) {
        console.error(error);
        this.toast(error.message);
      }
    },
  },
};
</script>

<style scoped></style>
