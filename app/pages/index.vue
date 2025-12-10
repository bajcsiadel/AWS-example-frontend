<script setup lang="ts">

</script>

<template>
    <img src="https://ab-tf-test-demo-bucket.s3.ap-northeast-1.amazonaws.com/assets/images/aws.webp" alt="AWS logo" class="tw:w-2xs tw:float-left tw:mr-4 tw:mb-2 tw:h-auto" />
    <header>
        <h1>AWS Training Project</h1>
    </header>


    <main>
        <h2>About This Project</h2>
        <p>
            This project is part of an AWS training exercise where we explore core AWS concepts, terminology, and
            services. The goal is to gain familiarity with infrastructure components such as IAM, VPC, EC2, S3, and
            Lambda, while building a simple but functional application.
        </p>


        <h2>Architecture Overview</h2>
        <p>
            The application is deployed across two Amazon EC2 instances within a custom Virtual Private Cloud (VPC):
        </p>
        <ul>
            <li><strong>Public Subnet:</strong> Hosts the web server running a Nuxt-based frontend.</li>
            <li><strong>Private Subnet:</strong> Hosts a Node.js-based backend simulating a database by reading and
                writing to a JSON file.</li>
        </ul>


        <p>
            Static assets used by the web application are stored in Amazon S3 and fetched directly from the bucket.
        </p>


        <h2>Included AWS Services</h2>
        <ul>
            <li><strong>IAM</strong> - manages access and permissions</li>
            <li><strong>VPC</strong> - provides isolated networking</li>
            <li><strong>EC2</strong> - runs the web and database servers</li>
            <li><strong>S3</strong> - stores website assets</li>
            <li><strong>Lambda</strong> - explored as part of training exercises</li>
        </ul>


        <h2>Technologies Used</h2>
        <ul>
            <li><strong>Nuxt</strong> - frontend framework</li>
            <li><strong>Node.js</strong> - simple backend used to emulate database behavior</li>
            <li><strong>JSON file</strong> - used as the data storage layer</li>
        </ul>


        <p>
            The project demonstrates how AWS infrastructure and cloud-native architecture concepts can support even
            simple applications, providing a foundation for more advanced deployments.
        </p>
    </main>
</template>