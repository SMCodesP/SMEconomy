package tk.smcodes.smeconomy.commands

import br.com.devsrsouza.kotlinbukkitapi.dsl.command.command
import tk.smcodes.smeconomy.SMEconomyPlugin

internal fun SMEconomyPlugin.registerCommands() {
    
    command("money") {
        description = "Ver suas estatísticas de money."
        
        executorPlayer { 
            
        }
    }
    
}