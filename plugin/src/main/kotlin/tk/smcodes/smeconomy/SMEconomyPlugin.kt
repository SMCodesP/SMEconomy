package tk.smcodes.smeconomy

import br.com.devsrsouza.kotlinbukkitapi.architecture.KotlinPlugin
import br.com.devsrsouza.kotlinbukkitapi.extensions.text.sendMessage
import org.bukkit.ChatColor
import tk.smcodes.smeconomy.commands.registerCommands
import tk.smcodes.smeconomy.extensions.log

class SMEconomyPlugin : KotlinPlugin() {

    override fun onPluginEnable() {
        "&c[${this.name}&c] &9-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-".log()
        "&c[${this.name}&c] &5&lNome&5 » &6${this.name}".log()
        "&c[${this.name}&c] &5&lAutor&5 » &1${this.description.authors}".log()
        "&c[${this.name}&c] &5&lStatus&5 » &2online".log()
        "&c[${this.name}&c] &9-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-".log()
        
        registerCommands()
    }

    override fun onPluginDisable() {
        "&c[${this.name}&c] &9-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-".log()
        "&c[${this.name}&c] &5&lNome&5 » &6${this.name}".log()
        "&c[${this.name}&c] &5&lAutor&5 » &1${this.description.authors}".log()
        "&c[${this.name}&c] &5&lStatus&5 » &4desligado".log()
        "&c[${this.name}&c] &9-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-".log()
    }

}