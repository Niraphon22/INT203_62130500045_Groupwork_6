const constraints = {
    firstname: {
        presence: true,
    },
    lastname: {
        presence: true,
    },
    age: {
        presence: true,
        numericality: {
            lessThan: 150
        }
    },
    gender: {
        presence: true,
    },
    email: {
        presence: true,
        email: true
    },
    phone: {
        presence: true,
        length: {
            minimum : 10,
            message: "must be at least 10 digits"
        }        
    },
    city: {
        presence: true
    },
    address: {
        presence: true
    }

}

var app =Vue.createApp({
    data() {
        return {
            formdata: {
                firstname: null,
                lastname: null,
                age: null,
                gender: null,
                email: null,
                phone: null,
                city: null,
                address: null,
            },
            errors: null,
        }
    },
    methods: {
        checkForm(){
            this.errors = validate(this.formdata,
                                    constraints)
            console.log(this.errors)
            if(!this.errors){
                alert("Your profile is updated successfully.")
            }
        }
    }
})

app.component('display-error',{
    props:{
        errors:{
            type: Object,
            required: true,
        },
        field:{
            type: String,
            required: true,
        }
    },
    template:
    /*html*/
    `
    <div v-if="errors && errorList">
        <p v-for="error in errorList" class="text-red-500 mb-0.5">{{error}}</p>
    </div>
    `,
    computed:{
        errorList(){
            return this.errors[this.field]
        }
    }
})

app.mount('#app')
