class ChecksForm extends React.Component {
  render() {
    const { check, invert, errors } = this.props

    return (
      <div>
        {this.renderHeader()}
        {this.renderErrors()}
        <form>
          <div className="form-group">
            <label for="query_id">Query</label>
          </div>
        </form>
      </div>
    )
  }

  renderErrors() {
    if (this.props.errors.length > 0) {
      return <div className="alert alert-danger">{this.props.errors[0]}</div>
    }
  }

  renderHeader() {
    // <% unless @check.respond_to?(:invert) %>
    //   <p class="text-muted">Checks are designed to identify bad data. A check fails if there are any results.</p>
    // <% end %>
  }
}

// <%= form_for @check do |f| %>
//   <div class="form-group">
//     <%= f.label :query_id, "Query" %>
//     <div class="hide">
//       <%= f.select :query_id, [], {include_blank: true} %>
//     </div>
//     <script>
//       var queries = <%= blazer_json_escape(Blazer::Query.named.order(:name).select("id, name").map { |q| {text: q.name, value: q.id} }.to_json).html_safe %>;
//       var items = <%= blazer_json_escape([@check.query_id].compact.to_json).html_safe %>;

//       $("#check_query_id").selectize({options: queries, items: items, highlight: false, maxOptions: 100}).parents(".hide").removeClass("hide");
//     </script>
//   </div>

//   <% if @check.respond_to?(:check_type) %>
//     <div class="form-group">
//       <%= f.label :check_type, "Alert if" %>
//       <div class="hide">
//         <% check_options = [["Any results (bad data)", "bad_data"], ["No results (missing data)", "missing_data"]] %>
//         <% check_options << ["Anomaly (most recent data point)", "anomaly"] if Blazer.anomaly_checks %>
//         <%= f.select :check_type, check_options %>
//       </div>
//       <script>
//         $("#check_check_type").selectize({}).parent().removeClass("hide");
//       </script>
//     </div>
//   <% elsif @check.respond_to?(:invert) %>
//     <div class="form-group">
//       <%= f.label :invert, "Fails if" %>
//       <div class="hide">
//         <%= f.select :invert, [["Any results (bad data)", false], ["No results (missing data)", true]] %>
//       </div>
//       <script>
//         $("#check_invert").selectize({}).parent().removeClass("hide");
//       </script>
//     </div>
//   <% end %>

//   <% if @check.respond_to?(:schedule) && Blazer.check_schedules %>
//     <div class="form-group">
//       <%= f.label :schedule, "Run every" %>
//       <div class="hide">
//         <%= f.select :schedule, Blazer.check_schedules.map { |v| [v, v] } %>
//       </div>
//       <script>
//         $("#check_schedule").selectize({}).parent().removeClass("hide");
//       </script>
//     </div>
//   <% end %>

//   <div class="form-group">
//     <%= f.label :emails %>
//     <%= f.text_field :emails, placeholder: "Optional, comma separated", class: "form-control" %>
//   </div>
//   <p class="text-muted">Emails are sent when a check starts failing, and when it starts passing again.
//   <p>
//     <% if @check.persisted? %>
//       <%= link_to "Delete", check_path(@check), method: :delete, "data-confirm" => "Are you sure?", class: "btn btn-danger" %>
//     <% end %>
//     <%= f.submit "Save", class: "btn btn-success" %>
//   </p>
// <% end %>
