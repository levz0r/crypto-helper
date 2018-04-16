var helper = require("./helper");

$(document).ready(function() {
  $("#crptoForm").submit(event => {
    let mnemonic = $("#mnemonicInput").val();
    let isValid = false;
    if (mnemonic && mnemonic.split(" ").length >= 12) {
      isValid = true;
    }
    if (isValid) {
      $("#mnemonicInput").removeClass("is-danger");
      $("#xpubKeyOutput").val(helper(mnemonic));
      $("#errorInputText").addClass("is-invisible");
      $("#copyXpubButton").attr("disabled", false);
    } else {
      $("#mnemonicInput").addClass("is-danger");
      $("#xpubKeyOutput").val("");
      $("#errorInputText").removeClass("is-invisible");
      $("#copyXpubButton").attr("disabled", true);
    }
    event.preventDefault();
  });
  $("#copyXpubButton").click(function(e) {
    if (!$(e.currentTarget).attr("disabled")) {
      $("#xpubKeyOutput").select();
      document.execCommand("copy");
    }
  });
});
