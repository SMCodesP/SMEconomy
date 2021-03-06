plugins {
    kotlin("jvm") version "1.3.71"
    id("net.minecrell.plugin-yml.bukkit") version "0.3.0"
    id("com.github.johnrengelman.shadow") version "5.2.0"
    kotlin("plugin.serialization") version "1.3.71"
}

group = "tk.smcodes"
version = "0.1.0-SNAPSHOT"

val spigot_version = "1.8.8-R0.1-SNAPSHOT"
val kotlinbukkitapi_version = "0.1.0-SNAPSHOT"

//val hikaricp_version = "3.4.1" // optional dependency
//val exposed_version = "0.21.1" // optional dependency

repositories {
    jcenter()

    // Spigot
    maven { url = uri("https://hub.spigotmc.org/nexus/content/repositories/snapshots/") }
    maven { url = uri("https://oss.sonatype.org/content/repositories/snapshots/") }

    // KotlinBukkitAPI
    maven { url = uri("http://nexus.devsrsouza.com.br/repository/maven-public/")}
    
    // Backup KotlinBukkitAPI repoistory, in case the above one is not working
    // maven("https://oss.jfrog.org/oss-snapshot-local/")
    // maven("http://nexus.okkero.com/repository/maven-releases/") //skedule
    // maven("https://repo.codemc.org/repository/maven-public") //bstats

    maven {
        name = "vault"
        url = uri("http://nexus.hc.to/content/repositories/pub_releases")
    }
}

dependencies {
    val changing = Action<ExternalModuleDependency> { isChanging = true }

    compileOnly(kotlin("stdlib-jdk8")) // embedded in KotlinBukkitAPI

    compileOnly("org.spigotmc:spigot-api:$spigot_version")

    // KotlinBukkitAPI
    compileOnly("br.com.devsrsouza.kotlinbukkitapi:core:$kotlinbukkitapi_version", changing)
    compileOnly("br.com.devsrsouza.kotlinbukkitapi:architecture:$kotlinbukkitapi_version", changing)
    compileOnly("br.com.devsrsouza.kotlinbukkitapi:serialization:$kotlinbukkitapi_version", changing)

    compileOnly("net.milkbowl.vault:VaultAPI:1.7")
    //compileOnly("br.com.devsrsouza.kotlinbukkitapi:exposed:$kotlinbukkitapi_version", changing)
    //compileOnly("br.com.devsrsouza.kotlinbukkitapi:plugins:$kotlinbukkitapi_version", changing)

    // OPTIONAL EXTRA DEPENDENCIES

    // hikaricp
    //implementation("com.zaxxer:HikariCP:$hikaricp_version")

    // exposed
    //implementation("org.jetbrains.exposed:exposed-core:$exposed_version")
    //implementation("org.jetbrains.exposed:exposed-java-jdbc:$exposed_version")
    //implementation("org.jetbrains.exposed:exposed-dao:$exposed_version")
}

bukkit {
    main = "${project.group}.${project.name.toLowerCase()}.${project.name}Plugin"
    author = "SMCodes"
    website = "smcodes.tk"
    depend = listOf("KotlinBukkitAPI")

    description = "Simple plugin economy."
}

tasks {
    compileKotlin {
        kotlinOptions.jvmTarget = "1.8"
    }
    compileTestKotlin {
        kotlinOptions.jvmTarget = "1.8"
    }
    shadowJar {
        classifier = null
    }
}

configurations.all {
    resolutionStrategy.cacheChangingModulesFor(120, "seconds")
}
